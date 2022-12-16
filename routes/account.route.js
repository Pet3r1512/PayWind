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

function addUser(username, fullname, password, dob, email, phoneNumber, address, res) {
    const user = new User()

    user.local.username = username
    user.local.fullname = fullname
    user.local.password = password
    user.local.dateOfBirth = dob
    user.local.email = email
    user.local.phoneNumber =phoneNumber
    user.local.address = address

    user.save(function(err, result){
        if(err){
            return res.redirect('signup')
        }
        return res.redirect('signin')
    })
}

router.get('/signup', (req, res) => {
    return res.render('account/entry/sign_up')
})

router.post('/signup', (req, res) => {
    let data = req.body


    let dobStr = data.dob.split("-")
    let dobStrJoin = dobStr[2] + dobStr[1] + dobStr[0].slice(2)
    let username = dobStrJoin + "0001"
    var password = Math.random().toString().slice(-6)

    User.findOne({ "local.username": { "$regex": dobStrJoin } }, null, { sort: { _id : -1 } }, function(err, result){
        if(err){

        }
        if(result) {
            let temp = result.local.username.slice(result.local.username.length - 4)
            let id = ""
            for(let i = 1; i <= 9999; i++){
                if(i > parseInt(temp, 10)){
                   id = i.toString().padStart(4, '0')
                   break
                }
            }
            username = dobStrJoin + id
            addUser(username, data.fullname, password, data.dob, data.email, data.phoneNumber, data.address, res)
        }
        else{
            addUser(username, data.fullname, password, data.dob, data.email, data.phoneNumber, data.address, res)
        }
    })
})

router.get('/signin', (req, res) => {
    const err_message = req.flash("err_message")
    return res.render('account/entry/sign_in', { message: err_message })
})

router.post('/signin', passport.authenticate('local', {
    failureRedirect: '/account/signin',
    failureMessage: true,
    failureFlash: true
}), (req, res) => {

    return res.redirect(`/user/${req.user.local.username}`)
})

router.use('/user', require('./user.route'))

router.get('/email/isExisted/:email', userController.isExisted)

module.exports = router