const router = require('express').Router();

router.get('/information', (req, res) => {
    return res.render('../views/user/profile/profile.pug')
})

router.post('/information', (req, res) => {
    return res.render('../views/user/profile/profile.pug')
})

router.get('/change_password', (req, res) => {
    return res.render('../views/user/profile/change_password.pug')
})

router.get('/verify_account', (req, res) => {
    return res.render('../views/user/profile/verify_account.pug')
})

module.exports = router