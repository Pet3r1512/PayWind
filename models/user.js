const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const saltRounds = 10

var userSchema = mongoose.Schema({
    local: {
        username: String,
        email: {
            type: String,
            unique: true
        },
        password: String,
    }
})

userSchema.methods.generateHash = function(password){
    return bcrypt.hash(password, saltRounds, null)
}

var User = mongoose.model("User", userSchema)

module.exports = User