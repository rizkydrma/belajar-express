const express = require('express')
const router = express.Router()
const users = require('../../Users')

// GET ALL USERS
router.get('/', (req, res) => res.json(users))

// GET SINGLE MEMBER
router.get('/:user', (req, res) => {
    const found = users.some(user => user.user === req.params.user)

    if(found){
        res.json(users.filter(user => user.user === req.params.user))
    }else{
        res.status(400).json({ msg: `Tidak ada user yang bernama ${req.params.user}`})
    }
})

module.exports = router