const mongoose = require("mongoose")

const mobileCardProviderSchema = mongoose.Schema({
    providerId: String,
    providerName: String,
    totalCards: Number 
})

module.exports = mongoose.model("MobileCardProvider", mobileCardProviderSchema)