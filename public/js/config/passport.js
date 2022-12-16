const localStrategy = require("passport-local").Strategy
const passport = require("passport")
const bcrypt = require("bcrypt")
const User = require("../../../models/user")

passport.serializeUser(function(user, done){
    done(null, user._id)
})

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err || !user){
            return done(err, null)
        }
        return done(null, user)
    })
})

passport.use(new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
}, function(username, password, done){
    User.findOne({ "local.username": username }, function(err, user){
        if(err){
            return done(err)
        }

        if(!user || !(bcrypt.compareSync(password, user.local.password))){
            req.flash("err_message", "Incorrect username or password")
            return done(null, false, { message: "Incorrect username or password" })
        }

        return done(null, user)
    })
}))
