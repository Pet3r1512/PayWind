const router = require('express').Router();

router.get('/signin', (req, res) => {
    return res.render('../views/user/account/sign_in.pug')
})

module.exports = router