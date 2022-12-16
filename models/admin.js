const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    adminName: String,
    adminPassword: String,
    lastLog: Date
})

module.export = mongoose.model("Admin", adminSchema)