const Cart = require('../models/cart.model')
const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    // get the list of cart Items
    try {
        res.json({ status: 'ok' })
    } catch (error) {
        res.json({ status: 'error', error: error })
    }
})

module.exports = router;