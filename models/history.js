const mongoose = require("mongoose")

const historySchema = mongoose.Schema({
    usernameReceived: {
        type: String,
        default: null
    },
    phoneNumberReceived: {
        type: String,
        default: null
    },
    usernameSend: {
        type: String,
        default: null
    },
    phoneNumberSend: {
        type: String,
        default: null
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    type: String,
    money: Number
})

module.exports = mongoose.model("History", historySchema)