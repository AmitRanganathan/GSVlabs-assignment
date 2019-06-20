/**
 * Nodemon will be run over this file.
 */


/**
 * Import necessary modules 
 */ 
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

// Let us build up an express server
const app = express()

// Enable the packages for this app
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // This could be a security risk

// Get the various routes from the routes.js file
require('./routes')(app)

sequelize.sync({force: true})
    .then(() => {
        app.listen(config.port)
        console.log(`server started on port ${config.port}`)
    })
