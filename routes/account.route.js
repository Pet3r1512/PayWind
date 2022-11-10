const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const saltRounds = 10
const bcrypt = require("bcrypt")
const User = require('../models/user')

function generateAccessToken(username) {
    return jwt.sign({ "user": username }, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

router.get('/signup', (req, res) => {
    return res.render('account/entry/sign_up')
})

router.post('/signup', (req, res) => {
    var data = req.body
    var user = new User()

    bcrypt.hash(data.password, saltRounds, function(err, hash){
        if(hash){
            user.local.username = data.username
            user.local.email = data.email
            user.local.password = hash

            user.save((err, user) => {
                if(err){
                    return res.send(err)
                }
            })
        }
    })

    return generateAccessToken(user.local.username)
})

router.get('/signin', (req, res) => {
    console.log(res)
    return res.render('account/entry/sign_in')
})

router.post('/signin', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/account/signin'}))

router.use('/user', require('./user.route'))

module.exports = router