const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('../views/account/user/features/features.pug')
})

router.get('/transfer', (req, res) => {
    return res.render('../views/account/user/features/transfer.pug')
})

router.get('/recharge', (req, res) => {
    return res.render('../views/account/user/features/recharge.pug')
})

router.get('/withdraw', (req, res) => {
    return res.render('../views/account/user/features/withdraw.pug')
})

router.get('/buy_mobile_card', (req, res) => {
    return res.render('../views/account/user/features/buy_mobile_card.pug')
})

router.get('/history', (req, res) => {
    return res.render('../views/account/user/features/history.pug')
})

router.get('/add-info', (req, res) => {
    return res.render('../views/account/user/features/add-info.pug')
})

router.get('/change-password', (req, res) => {
    return res.render('../views/account/user/features/change-password.pug')
})

module.exports = router