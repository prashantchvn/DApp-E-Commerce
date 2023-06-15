const Orders = require('../models/orders.model')
const Cart = require('../models/cart.model')
const express = require('express')
const router = express.Router();
const Web3 = require("web3")
const User = require('../models/user.model')

async function cartItems(id) {
    const cart = await Cart.findOne({ user: id })
    return cart.cartItems
}

function sendETH(fromAddress, toAddress, privateKey, amount) {

    // Connect to an Ethereum node
    const web3 = new Web3("https://fluent-broken-brook.ethereum-goerli.discover.quiknode.pro/fe4406891a39eaa2cbf3d5ed46ccfc89d15af86f/")
    const balance = web3.eth.getBalance("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4").then((res) => {
        console.log(res)
        console.log(web3.utils.toHex(21000) * web3.utils.toHex(web3.utils.toWei("0.001", "ether")) > web3.utils.toHex(web3.utils.toWei(amount, "ether")))
    })
    let transactionHash;
    // Create transaction object
    let transaction = {
        from: fromAddress,
        to: toAddress,
        gas: web3.utils.toHex(21000),
        value: web3.utils.toHex(web3.utils.toWei(amount, "ether"))
    }

    // Sign the transaction
    const signTx = new Promise((resolve, reject) => {
        resolve(web3.eth.accounts.signTransaction(transaction, privateKey))
    })

    signTx.then(signedTx => {
        // Send the transaction
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (error, hash) {
            if (!error) {
                transactionHash = hash;
            }
            else {
                console.log("Error: ", error)
            }
        })
    })
    return transactionHash
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
        const user = await User.findById(req.user);
        const transactionHash = sendETH(user.wallet.address, "", user.wallet.privateKey, req.body.amount)
        let order = await Orders.findOne({ orderPlacedBy: req.user })
        if (order) {

            // if first order placed by new user then create new record for the new user
            order = await Orders.findOneAndUpdate({ orderPlacedBy: req.user }, {
                $push: {
                    orders: {
                        cartItems: await cartItems(req.user),
                        orderTotal: req.body.amount,
                        paymentMode: req.body.paymentMode,
                        paymentReference: transactionHash,
                        deliveryAgency: "indian post services",
                        transactionHash: transactionHash
                    }
                }
            })
        } else {
            // if user already have an record for current user Id then push the order into orders array
            order = await Orders.create({
                orderPlacedBy: req.user,
                orders: {
                    cartItems: await cartItems(req.user),
                    orderTotal: req.body.amount,
                    paymentMode: req.body.paymentMode,
                    paymentReference: transactionHash,
                    deliveryAgency: "indian post services",
                    transactionHash: transactionHash
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
        res.json({ status: 'ok', data: data, transactionHash: transactionHash })
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

router.get('/get/balance', async (req, res) => {
    // get the list of orders placed logged in user
    try {
        const web3 = new Web3("https://fluent-broken-brook.ethereum-goerli.discover.quiknode.pro/fe4406891a39eaa2cbf3d5ed46ccfc89d15af86f/")
        const user = await User.findById(req.user);
        const balance = await web3.eth.getBalance('0x507Ea3bD542C0da7518328439301d4E10Fcb76e8')
        res.json({ status: 'ok', balance: balance })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

module.exports = router;