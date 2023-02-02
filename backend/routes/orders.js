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
        let cartLength = await cartItems(req.user)
        if (cartLength.length == 0) {
            res.json({ status: 'ok', message: "Order cannot be placed for empty cart" })
            return
        }
        // if (await cartItems(req.user).length === 0) {
        //     res.json({ status: 'or', message: "Cart is empty so order cannot be placed" })
        // }
        let order = await Orders.findOne({ orderPlacedBy: req.user })
        if (order) {

            // if first order placed by an user then create new record for the new user
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
            // if user already have an record for his user Id then push the order into orders array
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
        const data = await Orders.find({ orderPlacedBy: req.user }).populate("orderPlacedBy").populate("orders.cartItems.product")
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
            res.json({ status: 'ok', data: data })
        } else {
            res.json({ status: 'error', message: "No orders found for relative user" })
        }
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})


router.get('/admin', async (req, res) => {
    // get the list of orders placed by all users Items
    // admin route
    try {
        const data = await Orders.find({}).populate("orderPlacedBy").populate("cartItems")
        res.json({ status: 'ok', data: data })
    } catch (error) {
        res.json({ status: 'error', error: error })
    }
})

module.exports = router;