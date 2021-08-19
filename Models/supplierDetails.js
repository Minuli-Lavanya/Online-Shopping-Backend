const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierDetailsSchema = new Schema({
    
    supplier_id : {
        type : String,
        required: true
    },

    supplier_name : {
        type : String,
        required: true
    },

    email : {
        type : String,
        required: true
    },

    nic : {
        type : String,
        required: true
    },

    phone_number : {
        type : Number,
        required: true
    },

    gender : {
        type : String,
        required: true
    }

})

const Supplier_Detail = mongoose.model("Supplier_Detail", supplierDetailsSchema);

module.exports = Supplier_Detail;