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
    idCardNumber: {
        type: [String],
        default: ['111111', '222222', '333333']
    },
    balance: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("UserWallet", userWalletSchema)