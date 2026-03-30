const mongoose = require("mongoose");

const DonarSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    mobile: {
        type: String,
        required: true,
    },
    bloodType: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },
    reason: {
        type: String,
        required: true,
    },
    healthCondition: {
        type: Boolean,
        default: true
    }
});



module.exports = mongoose.model("Donar", DonarSchema)