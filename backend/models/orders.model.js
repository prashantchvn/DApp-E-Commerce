const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderPlacedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserData', required: true },
    cartItems: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
    OrderTotal: { type: Number, required: true },
    paymentMode: {type: String, required: true },
    paymentReference: {type: String },
    paidStatus: {type: Boolean, default: false},
    orderPlaced: {type: Boolean, default: false},
    deliveryAgency: {type: String, required: true }
}, { timestamps: true });


module.exports = mongoose.model('Orders', cartSchema);