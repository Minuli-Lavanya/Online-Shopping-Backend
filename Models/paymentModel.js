const mongoose = require('mongoose')


const paymentSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    postal_code:{
        type: Object,
        required: true
    },
    address:{
        type: Object,
        required: true
    },
    contactNo:{
        type: Object,
        required: true
    },
    cardType:{
        type: Object,
        required: true
    },
    expMonth:{
        type: Array,
        required: true
    },
    expYear:{
        type: Array,
        required: true
    },
    cvn:{
        type: Array,
        required: true
    },
    cart:{
        type: Array,
        default: []
    },
    status:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Payments", paymentSchema)

