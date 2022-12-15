const mongoose = require("mongoose")

var userSchema = mongoose.Schema({
    local: {
        username: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
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
        idVerified: Boolean
    },
})

var User = mongoose.model("User", userSchema)

module.exports = User