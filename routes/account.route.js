const router = require('express').Router();

router.get('/signin', (req, res) => {
    return res.render('/views/account/entry/sign_in.pug')
})

router.get('/signup', (req, res) => {
    return res.render('account/entry/sign_up.pug')
})

module.exports = router