const mongoose = require('mongoose')

const Contact = new mongoose.Schema({
        name: { type: 'String', required: true },
        email: { type: 'String', required: true,  },
        phoneNo: { type: 'String', required: true },
        message : {type: 'String', required: true}
    }, 
    {
        collection: 'contact'
    }
)

const model = mongoose.model('Contacts',Contact)

module.exports = model