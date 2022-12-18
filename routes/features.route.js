const router = require('express').Router();
const userController = require('../api/userController')
const User = require("../models/user")
const UserWallet = require("../models/userWallet")
const creditCard = require('../models/creditCard')
const History = require('../models/history');
const fetch = require('node-fetch')
const bcrypt = require('bcrypt')
const saltRounds = 10;

async function getIncomeHistory (username, callback){
    //Nếu chạy dự án ở local thì sử dụng dòng 12 thay cho dòng 13

    // const apiLink = `http://localhost:3000/features/getIncomeHistory/${username}`
    const apiLink = `http://paywind.up.railway.app/features/getIncomeHistory/${username}`
    
    const response = await fetch(apiLink)
    .then(res => res.json())
    .then(data => callback(data))
}

function checkUser(req, res, link) {
    if(req.session.passport != undefined) {
        const data = req.session.passport.user
        User.findOne({_id: data}, function(err, result) {
            if(err) {
                console.log(err)
            }

            UserWallet.findOne({ "username": result.local.username }, function(err, wallet_res){
                if(err) {
                    console.log(err)
                }
                else {
                    creditCard.findOne({ "idCardNumber": wallet_res.idCardNumber[0] }, function(err, card_res){
                        if(err) {
                            console.log(err)
                        }
                        const exp = new Date(card_res.expiredDate).toLocaleDateString("en-GB")
                        return res.render(`../views/account/user/features/${link}`, {
                            username: result.local.username,
                            info: wallet_res,
                            user: result.local,
                            exp: exp
                        })
                    })
                }
            })
        })
    }
    else
        return res.redirect('/')
}

router.get('/', (req, res) => {
    checkUser(req, res, "features.pug")
})

router.get('/transfer', (req, res) => {
    checkUser(req, res, "transfer.pug")
})

router.get('/recharge', (req, res) => {
    checkUser(req, res, "recharge.pug")
})

router.post('/recharge', (req, res) => {
    const data = req.body
    const moneyArr = data.currency_field.split(',')
    let moneyString = "";
    for(let i = 0; i < moneyArr.length; i++){
        moneyString = moneyString + moneyArr[i]
    }
    const money = Number(moneyString)

    creditCard.findOne({
        "idCardNumber": data.cardNumber,
        "cvv": data.cvv
    }, function(err, result){
        if(err){
            return res.render('assets/layouts/notice.pug', { message: 'failed' })
        }
        else {
            const data = req.session.passport.user
            User.findOne({ _id: data }, function(err, user_res){
                if(err){
                    return res.send(err)
                }
                else {
                    UserWallet.findOne({ "idCardNumber": result.idCardNumber, "username": user_res.local.username }, function(err, wallet_res){
                        if(err){
                            return res.render('assets/layouts/notice.pug', { message: "failed" })
                        }
                        else {
                            UserWallet.findOneAndUpdate({ "idCardNumber": result.idCardNumber, "username": user_res.local.username }, { "balance": wallet_res.balance + money }, function(err, addMoney_res){
                                if(err){
                                   return res.send(err)
                                }
                                const history = new History()
                                history.usernameReceived = addMoney_res.username
                                history.phoneNumberReceived = addMoney_res.phoneNumber
                                history.money = money
                                history.save(function(err, history_res){
                                    if(err){
                                        return res.render('assets/layouts/notice.pug', { message: "failed" })
                                    }
                                    return res.render('assets/layouts/notice.pug', { message: "success" })
                                })
                            })
                        }
                    })
                }
            })
        }
    })
})

router.get('/withdraw', (req, res) => {
    checkUser(req, res, "withdraw.pug")
})

router.get('/buy_mobile_card', (req, res) => {
    checkUser(req, res, "buy_mobile_card.pug")
})

router.get('/history', (req, res) => {
    if(req.session.passport != undefined) {
        const data = req.session.passport.user
        User.findOne({_id: data}, function(err, result) {
            if(err) {
                console.log(err)
            }

            getIncomeHistory(result.local.username, (json) => {
                return res.render('../views/account/user/features/history', { username: result.local.username, items: json })
            })
        })
    }
    else
        return res.redirect('/')
})

router.get('/add-info', (req, res) => {
    checkUser(req, res, "add-info.pug")
})

router.get('/change-password', (req, res) => {
    checkUser(req, res, "change-password.pug")
})

router.post('/change-password', (req, res) => {
    const data = req.body
    const userId = req.session.passport.user

    User.findOne({ _id: userId }, function(err, result){
        if(err){
            return res.send({ code: "not found", msg: err })
        }
        else {
            bcrypt.compare(data.old_password, result.local.password, function(err, pass_res){
                if(err){
                    return res.send({ code: "compare failed", msg: err })
                }

                else{
                    if(pass_res == false){
                        return res.send({code: "failed", msg: "Wrong password" })
                    }
                    else {
                        bcrypt.hash(data.password, saltRounds, function(err, hash){
                            if(err){
                                return res.send({ code: "hash failed", msg: err })
                            }
                            else {
                                User.findOneAndUpdate({ _id: userId }, { $set:{ 'local.password': hash } }, { new: true, upsert: false }, function(err, changepass_res){
                                    if(err){
                                        return res.send({ code: "update failed", msg: err })
                                    }
                                    else {
                                        // return res.send({code: "success", data: changepass_res})
                                        req.session.destroy()
                                        return res.redirect('/')
                                    }
                                })
                            }
                        })
                    }
                }
            })
        }
    })
})

router.get('/getIncomeHistory/:username', userController.incomeHistory)

module.exports = router