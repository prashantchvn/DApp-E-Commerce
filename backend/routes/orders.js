const Orders = require('../models/orders.model')
const Cart = require('../models/cart.model')
const express = require('express')
const router = express.Router();

async function cartItems(id) {
    const cart = await Cart.findOne({ user: id })
    return cart.cartItems
}

router.post('/', async (req, res) => {
    // get the list of orders placed logged in user
    try {
        // if the cart is empty
        let cartItem = await cartItems(req.user)
        if (cartItem.length == 0) {
            res.json({ status: 'ok', message: "Order cannot be placed for empty cart" })
            return
        }
        let order = await Orders.findOne({ orderPlacedBy: req.user })
        if (order) {

            // if first order placed by new user then create new record for the new user
            order = await Orders.findOneAndUpdate({ orderPlacedBy: req.user }, {
                $push: {
                    orders: {
                        cartItems: await cartItems(req.user),
                        orderTotal: 400,
                        paymentMode: req.body.paymentMode,
                        paymentReference: "sdkfljasdfkjslkdfjlaksdf",
                        deliveryAgency: "indian post services"
                    }
                }
            })
        } else {
            // if user already have an record for current user Id then push the order into orders array
            order = await Orders.create({
                orderPlacedBy: req.user,
                orders: {
                    cartItems: await cartItems(req.user),
                    orderTotal: 400,
                    paymentMode: req.body.paymentMode,
                    paymentReference: "sdkfljasdfkjslkdfjlaksdf",
                    deliveryAgency: "indian post services"
                }
            })
        }
        order.save(async () => {
            // empty the cart once the order is placed
            await Cart.findOneAndUpdate({ user: req.user }, {
                $set: {
                    cartItems: [],
                }
            })
        })
        const data = await Orders.find({ orderPlacedBy: req.user }).populate("orders.cartItems.product")
        res.json({ status: 'ok', data: data })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

router.get('/', async (req, res) => {
    // get the list of orders placed logged in user
    try {
        const order = await Orders.findOne({ orderPlacedBy: req.user })
        if (order) {
            const data = await Orders.findOne({ orderPlacedBy: req.user }).populate("orders.cartItems.product")
            res.json({ status: 'ok', data: data.orders })
        } else {
            res.json({ status: 'error', data: [], message: "No orders found for relative user" })
        }
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})



module.exports = router;