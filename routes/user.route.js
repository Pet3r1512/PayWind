const router = require('express').Router();
const User = require('../models/user')

var card = [
    {
        name: "1",
        exp: "06/22",
        id: "111111111"
    },

    {
        name: "2",
        exp: "08/22",
        id: "222222222"
    },
    {
        name: "3",
        exp: "08/22",
        id: "222222222"
    },
    {
        name: "4",
        exp: "08/22",
        id: "222222222"
    },

]

router.get('/:id', (req, res) => {
    if(req.session.passport != undefined){
        const data = req.session.passport.user

        User.findOne({ _id: data }, function(err,result){
            if(err){
                console.log(err)
            } else {
                const userData = result.local
                const dob = new Date(userData.dateOfBirth).toLocaleDateString("en-GB")
                return res.render('account/user/dashboard', {
                    username: userData.username,
                    fullname: userData.fullname,
                    email: userData.email,
                    phoneNumber: userData.phoneNumber,
                    address: userData.address,
                    dob: dob
                })
            }
        })
    } else {
        return res.redirect('/')
    }
})

module.exports = router