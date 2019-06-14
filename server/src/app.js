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

// Let us build up an express server
const app = express()

// Enable the packages for this app
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // This could be a security risk

// Create an endpoint
app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

app.listen(process.env.PORT || 8082)
