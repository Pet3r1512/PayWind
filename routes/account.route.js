const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const saltRounds = 10
const bcrypt = require("bcrypt")
const User = require('../models/user')
const UserWallet = require('../models/userWallet')
const userController = require('../api/userController')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "paywindco@gmail.com",
        pass: 'qajgkddhxtxivgmd'
    }
})

function addUserWallet(username, phoneNumber, res){
    const wallet = new UserWallet()
    wallet.username = username
    wallet.phoneNumber = phoneNumber

    wallet.save(function(err, result){
        if(err){
            return res.render('account/entry/error', { err: err })
        }
        else {
            return res.render('account/entry/successful')
        }
    })
}

function addUser(username, fullname, password, dob, email, phoneNumber, address, res) {
    const user = new User()

    bcrypt.hash(password, saltRounds, function(err, hash){
        if(hash){
            user.local.password = hash
            user.local.username = username
            user.local.fullname = fullname
            user.local.dateOfBirth = dob
            user.local.email = email
            user.local.phoneNumber =phoneNumber
            user.local.address = address

            const mailOptions = {
                from: "paywindco@gmail.com",
                to: `${email}`,
                subject: "Welcome To PayWind",
                html: `
                    <h1>Hello ${fullname},</h1> \n
                    <p>Welcome to PayWind, With PayWind E-Wallet, you will no longer worry about your money because Safe, Accurate, and Fast is our main considerations.</p> \n
                    <p>This is your account infomation:</p> \n
                    <p>Username: <b>${username}</b></p>\n
                    <p>Password: <b>${password}</b></p>
                    <p>Never give your account password to anyone else!</p>
                    `
            }

            transporter.sendMail(mailOptions, function(err, info){
                if(err){
                    return res.render('account/entry/error', { err: err })
                }
                else {
                    user.save(function(err, result){
                        if(err){
                            return res.render('account/entry/error', { err: err })
                        }
                        else {
                            addUserWallet(username, phoneNumber, res)
                        }
                    })
                }
            })
        }
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
    if(req.user.local.username == "admin"){
        return res.redirect('/admin')
    }
    return res.redirect(`/user/dashboard`)
})

router.get('/signout', (req, res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        }
        return res.redirect('/')
    })
})

router.use('/user', require('./user.route'))

router.get('/email/isExisted/:email', userController.isExisted)
router.get('/phone/isExisted/:phoneNumber', userController.phoneIsExisted)

module.exports = router