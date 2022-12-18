const mongoose = require("mongoose")

const credit_cardSchema = mongoose.Schema({
    order: {
        type: Number,
        unique: true
    },
    idCardNumber: {
        type: String,
        unique: true
    },
    expiredDate: Date,
    cvv: {
        type: Number,
        unique: true
    }
})

module.exports = mongoose.model("credit_card", credit_cardSchema)