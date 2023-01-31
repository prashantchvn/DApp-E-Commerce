const Cart = require('../models/cart.model')
const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    
    res.send({ status : 'ok'})
})

module.exports = router;