const router = require('express').Router()
const users = require('../../Users')
const usersController = require('../../controller/users.controller')

// // GET ALL USERS
// router.get('/', (req, res) => res.json(users))

// // GET SINGLE MEMBER
// router.get('/:user', (req, res) => {
//     const found = users.some(user => user.user === req.params.user)

//     if(found){
//         res.json(users.filter(user => user.user === req.params.user))
//     }else{
//         res.status(400).json({ msg: `Tidak ada user yang bernama ${req.params.user}`})
//     }
// })

router.post('/', usersController.createUser)
router.get('/', usersController.readUser)
// router.get('/:id', usersController.findUserById)
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router