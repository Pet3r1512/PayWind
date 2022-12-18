const router = require('express').Router();
const User = require('../models/user')
const userController = require('../api/userController');
const fetch = require('node-fetch')

async function getUserDataList (callback){
    // const apiLink = "http://localhost:3000/admin/inactiveUser"
    const apiLink = "http://paywind.up.railway.app/admin/inactiveUser"
    const response = await fetch(apiLink)
    .then(res => res.json())
    .then(data => callback(data))
}

router.get('/', (req, res) => {
    if(req.session.passport != undefined){
        const data = req.session.passport.user
        const message = req.flash("success_approve")

        getUserDataList((json) => {
            User.findOne({ _id: data }, function(err,result){
                if(err){
                    console.log(err)
                } else {
                    return res.render('account/admin/admin', { username: result.local.username, items: json, msg: message })
                }
            })
        })
    }
    else {
        return res.redirect('/')
    }
})

router.get('/approve/:id', (req, res) => {
    if(req.session.passport != undefined){
        const id = req.params.id

        User.findOneAndUpdate({ "local.username": id }, { "local.isVerified": "Activated" }, function(err,result){
            if(err){
                console.log(err)
            } else {
                req.flash("success_approve", "Successfully Approve!")
                return res.redirect('/admin')
            }
        })
    }
})

router.get('/inactiveUser', userController.inactiveUserList)

module.exports = router