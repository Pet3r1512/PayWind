const User = require("../models/user")

module.exports = {
    isExisted: (req, res) => {
        const emailInput = req.params.email

        User.find({ "local.email": emailInput }, {lean:true}, function(err, data){
            if(err){
                return res.json({ "err": err })
            }
            if(data == ''){
                return res.json({ isExisted: false })
            }

            return res.json({ isExisted: true })
        })
    },

    phoneIsExisted: (req, res) => {
        const phoneInput = req.params.phoneNumber

        User.find({ "local.phoneNumber": phoneInput }, {lean:true}, function(err, data){
            if(err){
                return res.json({ "err": err })
            }
            if(data == ''){
                return res.json({ isExisted: false })
            }

            return res.json({ isExisted: true })
        })
    }
}