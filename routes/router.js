const router = require('express').Router()

const apiUser = require('./api/users')

router.use('/api/users', apiUser)

module.exports = router