const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const app = express()


// INIT MIDDLEWARE
// app.use(logger)

// SET STATIC FOLDER (PUBLIC FOLDER)
app.use(express.static(path.join(__dirname, 'public')))

// USERS API ROUTES
app.use('/api/users', require('./routes/api/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));