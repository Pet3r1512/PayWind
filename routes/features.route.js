const router = require('express').Router();
const User = require("../models/user")
const UserWallet = require("../models/userWallet")
const creditCard = require('../models/creditCard')

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
            return res.send(err)
        }
        else {
            UserWallet.findOne({ "idCardNumber": result.idCardNumber }, function(err, wallet_res){
                if(err){
                    return res.send(err)
                }
                else {
                    UserWallet.findOneAndUpdate({ "idCardNumber": result.idCardNumber }, { "balance": wallet_res.balance + money }, function(err, addMoney_res){
                        if(err){
                           return res.send(err)
                        }
                        return res.send({ code: "success", data: addMoney_res })
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
    checkUser(req, res, "history.pug")
})

router.get('/add-info', (req, res) => {
    checkUser(req, res, "add-info.pug")
})

router.get('/change-password', (req, res) => {
    checkUser(req, res, "change-password.pug")
})

module.exports = router