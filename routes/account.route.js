const router = require('express').Router();

router.get('/signin', (req, res) => {
    return res.render('account/entry/sign_in')
})

router.get('/signup', (req, res) => {
    return res.render('account/entry/sign_up')
})

module.exports = router