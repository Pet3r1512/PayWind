const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const saltRounds = 10

var userSchema = mongoose.Schema({
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