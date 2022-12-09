const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const saltRounds = 10
const bcrypt = require("bcrypt")
const User = require('../models/user')
const userController = require('../api/userController')

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

    return res.redirect('signin')
})

router.get('/signin', (req, res) => {
    return res.render('account/entry/sign_in')
})

router.post('/signin', passport.authenticate('local', {
    failureRedirect: '/account/signin',
    failureMessage: true
}), (req, res) => {
    return res.redirect(`/user/${req.user.local.username}`)
})

router.use('/user', require('./user.route'))

router.get('/change-password', (req, res) => {
    return res.render('account/user/change_password')
})

router.get('/email/isExisted/:email', userController.isExisted)

module.exports = router