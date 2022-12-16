const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    local: {
        username: String,
        email: {
            type: String,
            unique: true,
        },
        password: String
    },
})

module.exports = mongoose.model("User", userSchema)