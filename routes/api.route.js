const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('../views/user/signIn/signIn.pug')
})

module.exports = router