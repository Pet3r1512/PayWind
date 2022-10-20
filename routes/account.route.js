const router = require('express').Router();

router.get('/signin', (req, res) => {
    return res.render('account/entry/sign_in')
})

router.get('/signup', (req, res) => {
    return res.render('account/entry/sign_up')
})

router.use('/user', require('./user.route'))

module.exports = router