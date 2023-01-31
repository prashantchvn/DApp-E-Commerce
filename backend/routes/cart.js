const Cart = require('../models/cart.model')
const express = require('express')
const router = express.Router();

router.post('/addItem', async (req, res) => {
    try {
        const cart = await Cart.findOne({user: req.user})
        if(cart){
            // need to figure out the nested query to find the cart product with given product Id
            let cartWithProduct = await Cart.findOne({user: req.user, cartItems : req.body.cartItems})
            console.log(cartWithProduct)
            if(cartWithProduct){
                //update the quntity if prouduct already exist
                let product = cartWithProduct.cartItems.find((item)=>{
                    item.prouduct == req.cartItems.prouduct
                })
                product.quantity = product.quantity + req.body.cartItems.quantity
                product.save()
                res.json({status: 'ok', items: data.cartItems})
            }else{
                // push the product in item if it is not id
                const data = await Cart.findByIdAndUpdate({ _id: cart._id },{
                    $push: {
                      cartItems: req.body.cartItems,
                    }})
                res.json({status: 'ok', items: data.cartItems})
            }
        }else{     
           //create a new cart if not exist
           const cart = await Cart.create({
                user: req.user,
                cartItems: req.body.cartItem,
            })
            res.json({status: 'ok', data: cart})
        }
        // if itme found then just increament the quanity of the proudct in cart
    } catch (error) {  
        res.json({ status: 'error', error: error })
    }
})

module.exports = router;