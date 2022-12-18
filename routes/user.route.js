const router = require('express').Router();
const User = require('../models/user')
const UserWallet = require('../models/userWallet')
const creditCard = require('../models/creditCard')

router.get('/dashboard', (req, res) => {
    if(req.session.passport != undefined){
        const data = req.session.passport.user

        User.findOne({ _id: data }, function(err, result){
            if(err){
                console.log(err)
            } else {
                const userData = result.local
                const dob = new Date(userData.dateOfBirth).toLocaleDateString("en-GB")

                UserWallet.findOne({ "username": userData.username }, function(err, card_result){
                    if(err){
                        console.log(err)
                    }
                    else {
                        creditCard.findOne({ "idCardNumber": card_result.idCardNumber[0] }, function(err, cardDetail_result){
                            if(err){
                                console.log(err)
                            }
                            else {
                                const exp = new Date(cardDetail_result.expiredDate).toLocaleDateString("en-GB")
                                return res.render('account/user/dashboard', {
                                    username: userData.username,
                                    fullname: userData.fullname,
                                    email: userData.email,
                                    phoneNumber: userData.phoneNumber,
                                    address: userData.address,
                                    dob: dob,
                                    creditCard: card_result,
                                    exp: exp
                                })
                            }
                        })
                    }
                })
            }
        })
    } else {
        return res.redirect('/')
    }
})

module.exports = router