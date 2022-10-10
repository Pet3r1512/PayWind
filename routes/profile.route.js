const router = require('express').Router();

router.get('/change_password', (req, res) => {
    return res.render('../views/user/profile/change_password.pug')
})

router.get('/verify_account', (req, res) => {
    return res.render('../views/user/profile/verify_account.pug')
})

module.exports = router