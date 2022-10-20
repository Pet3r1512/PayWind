const router = require('express').Router();

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
    return res.render('account/user/dashboard', {
        id: req.params.id,
        cards: card,
        card_count: card.length
    })
})

module.exports = router