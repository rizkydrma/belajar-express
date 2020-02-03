const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger')
const app = express()
const router = require('./routes/router')
const cors = require('cors')

// INIT MIDDLEWARE
// app.use(logger)

// CORS
app.use(cors())
// HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// BODY PARSER
app.use(express.urlencoded({extended: false}))
app.use('/', router)

// HOME PAGE ROUTE
app.get('/', (req, res) => res.render('index', {
        title: "Create User"
    })
)

// SET STATIC FOLDER (PUBLIC FOLDER)
app.use(express.static(path.join(__dirname, 'public')))

// USERS API ROUTES
app.use('/api/users', require('./routes/api/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app