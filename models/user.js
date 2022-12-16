const mongoose = require("mongoose")

var userSchema = mongoose.Schema({
    local: {
        userId: String,
        username: String,
        password: String,
        dateOfBirth: Date,
        email: {
            type: String,
            unique: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
            default: null
        },
        address: {
            type: String,
            unique: true,
            default: null
        },
        idCardNumber: {
            type: [String],
            default: null
        },
        isVerified: Boolean
    },
})

var User = mongoose.model("User", userSchema)

module.exports = User