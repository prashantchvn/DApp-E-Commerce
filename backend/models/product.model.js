const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName: { type: 'String', required: true },
    description: { type: 'String' },
    category: { type: 'String' },
    slug: { type: 'String', required: true, unique: true },
    price: { type: 'Number', required: true },
    discountPrice: { type: 'Number', required: true },
    images: [{
        type: String
    }]
},
    {
        collection: 'products-data'
    }
)

const model = mongoose.model('ProductData', ProductSchema)

module.exports = model