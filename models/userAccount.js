const mongoose = require("mongoose")

const userAccountSchema = mongoose.Schema({
    userId: String,
    userPhoneNumber: String,
    openedDay: Date,
    expiredDay: Date,
    balance: Number,
    type: String
})

module.exports = mongoose.model("UserAccount", userAccountSchema)