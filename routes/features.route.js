const router = require('express').Router();
const User = require("../models/user")

function checkUser(req, res, link) {
    if(req.session.passport != undefined) {
        const data = req.session.passport.user
        User.findOne({_id: data}, function(err, result) {
            if(err) {
                console.log(err)
            }
            return res.render(`../views/account/user/features/${link}`, { username: result.local.username})
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