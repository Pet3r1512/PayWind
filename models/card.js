const mongoose = require("mongoose")

const cardSchema = mongoose.Schema({
    cardId: Number,
    cardNumber: String, 
    expiredDay: Date,
    cvv: String
})

module.exports = mongoose.model("Card", cardSchema)