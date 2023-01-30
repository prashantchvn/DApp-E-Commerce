
const Products = require('../models/product.model')
const express = require("express");
const router = express.Router();

router.post('/', async (req,res)=>{
    try {
        const product = await Products.create({
            productName : req.body.productName,
            description: req.body.description,
            price: req.body.price,
            discountPrice: req.body.discountPrice,
        })
        res.json({status : 'ok'})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

router.get('/', async (req,res)=>{
    try {
        const data = await Products.find()
        res.json({status : 'ok', data: data})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

router.patch('/update/:id', async (req,res)=>{
    try {
        const data = await Products.findByIdAndUpdate({_id : req.params.id},req.body)
        res.json({status : 'ok', message: 'product updated successfully'})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

router.delete('/delete/:id', async (req,res)=>{
    try {
        const data = await Products.findByIdAndDelete({_id : req.params.id})
        res.json({status : 'ok', message: 'product Deleted successfully'})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

module.exports = router;