const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["simple donar", "doctor"],
        default: "simple donar"
    },
    otp: {
        type: String,
    },
});



module.exports = mongoose.model("User", UserSchema)