const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: [6, 'Password must be at least 6 digits!'],
        validate: {
            validator: function(v){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(v)
            },
            message: "Password must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter and 1 number"
        }
    }
})

var User = mongoose.model("User", userSchema)

module.exports = User