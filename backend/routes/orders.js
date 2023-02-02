const Orders = require('../models/orders.model')
const Cart = require('../models/cart.model')
const express = require('express')
const router = express.Router();

async function cartId(id) {
    const cart = await Cart.findOne({ user: id })
    return cart._id
}


function filterDataForUser(data) {
    console.log(data)
    let obj = {};
    obj.cartItems = data.cartItems.cartItems;
    obj.orderTotal = data.orderTotal;
    obj.paymentMode = data.paymentMode;
    obj.paymentReference = data.paymentReference;
    obj.orderDelivered = data.orderDelivered;
    return obj;
}

router.post('/', async (req, res) => {
    // get the list of orders placed logged in user
    try {
        let order = await Orders.findOne({ orderPlacedBy: req.user })
        if (order) {

            // if first order placed by an user then create new record for the new user
            order = await Orders.findOneAndUpdate({ orderPlacedBy: req.user }, {
                $push: {
                    orders: {
                        cartItems: await cartId(req.user),
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
                    cartItems: await cartId(req.user),
                    orderTotal: 400,
                    paymentMode: req.body.paymentMode,
                    paymentReference: "sdkfljasdfkjslkdfjlaksdf",
                    deliveryAgency: "indian post services"
                }
            })
        }
        res.json({ status: "ok", data: order })
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
            const data = await Orders.find({ orderPlacedBy: req.user }).populate("orderPlacedBy").populate("orders.cartItems").populate({ path: "orders.cartItems", populate: { path: "cartItems.product" } })
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