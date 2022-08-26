const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Address: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    subject: {
        type: String,
        required: true,
    }


})



const RegisterCustomerdata = new mongoose.model("RegisterCustomerdata", customerSchema);

module.exports = RegisterCustomerdata;