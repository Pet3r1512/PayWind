const mongoose = require("mongoose")

var userSchema = mongoose.Schema({
    local: {
        username: {
            type: String,
            unique: true
        },
        fullname: String,
        password: String,
        dateOfBirth: Date,
        email: {
            type: String,
            unique: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
        },
        address: String,
        idCardNumber: {
            type: [String],
            default: null
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
})

var User = mongoose.model("User", userSchema)

module.exports = User