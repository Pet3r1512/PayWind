const mongoose = require("mongoose")

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

var User = mongoose.model("User", userSchema)

module.exports = User