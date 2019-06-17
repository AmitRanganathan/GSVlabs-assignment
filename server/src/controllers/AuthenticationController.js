const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}


/**
 * Export routes related to authentication.. For example, we need a register route
 */
module.exports = {
    // Used for declaring endpoints
    async register(req, res) {
        try{
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },
    async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  },
    async login(req, res) {
        try{
            const {email, password} = req.body // Grab the email and password from req. body
            console.log("email: " + email)
            console.log("password: " + password)
            const user = await User.findOne({    // Find the user which matches this email address
                where: {
                    email: email
                }
            })
            //console.log(user)
            if(!user) {                          // If no user found with that email address, throw an error
                res.status(403).send({
                    error: 'Login information was incorrect.'
                })
            }
            const isPasswordValid = await user.comparePassword(password)  // Check if the password entered matches the users password
            console.log(isPasswordValid)
            if(!isPasswordValid) {                              // If not, throw an error
                res.status(403).send({
                    error: 'Login information was incorrect.'
                })
            }
            // If everything is good to go, return that user
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in.'
            })
        }
    }
}