const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
        productName: { type: 'String', required: true },
        description: { type: 'String' },
        price: { type: 'Number', required: true, unique: true },
        discountPrice: { type: 'Nunmber', required: true },
    }, 
    {
        collection: 'products-data'
    }
)

const model = mongoose.model('ProductData',ProductSchema)

module.exports = model