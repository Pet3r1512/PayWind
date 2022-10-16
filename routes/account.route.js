const router = require('express').Router();

router.get('/signin', (req, res) => {
    return res.render('../views/user/account/sign_in.pug')
})

router.get('/create_account', (req, res) => {
    return res.render('../views/user/account/create_account.pug')
})

module.exports = router