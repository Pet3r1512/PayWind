const mongoose = require("mongoose")

const userWalletSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    phoneNumber: {
        type: String,
        unique: true
    },
    idCardNumber: [String],
    balance: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("UserAccount", userWalletSchema)