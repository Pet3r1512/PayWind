const router = require('express').Router();

router.get('/transfer', (req, res) => {
    return res.render('../views/user/features/transfer.pug')
})

router.get('/deposit', (req, res) => {
    return res.render('../views/user/features/deposit.pug')
})

router.get('/withdraw', (req, res) => {
    return res.render('../views/user/features/withdraw.pug')
})

router.get('/buy_mobile_card', (req, res) => {
    return res.render('../views/user/features/buy_mobile_card.pug')
})

module.exports = router