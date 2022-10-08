const router = require('express').Router();

router.get('/signin', (req, res) => {
    return res.render('signIn/signIn')
})

module.exports = router