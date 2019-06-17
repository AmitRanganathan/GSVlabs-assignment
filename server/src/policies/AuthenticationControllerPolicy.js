const Joi = require('joi')  // Used for validating various things in express.js

/**
 * This file will be uesd in the routes.js file just for validation
 */
module.exports = {
    // This method will be used as a middleware method to validate emails and passwords
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        if(error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Please provide a valid email address.'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password failed to match the following rules: 
                        <br>
                        1. Must contain the following characters: lower case/upper case letters and numbers.
                        <br>
                        2. Must be at least 8 characters in length and no greater than 32 characters in length.
                        <br>
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information.'
                    })
            }
        }else {
            next()  // Go to next line defined in the routes.js file
        }
    }
}