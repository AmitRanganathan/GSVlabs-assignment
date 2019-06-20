const Joi = require('joi')  // Used for validating various things in express.js

/**
 * This file will be used in the routes.js file just for validation
 */
module.exports = {
    // This method will be used as a middleware method to validate user inputs while creating a poem
    post(req, res, next) {
        const schema = {
            title: Joi.string().regex(
                new RegExp('[a-zA-Z0-9]$')
            ),
            author: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            noun1: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            noun2: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            noun3: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            adj1: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            adj2: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            adj3: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            adverb1: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            adverb2: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            adverb3: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            prep1: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            prep2: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            prep3: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            verb1: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            verb2: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
            verb3: Joi.string().regex(
                new RegExp('[a-zA-Z]$')
            ),
        }
        const {error, value} = Joi.validate(req.body, schema)
        if(error) {
            switch (error.details[0].context.key) {
                case 'title':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break
                case 'author':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break
                
                case 'noun1':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'noun2':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'noun3':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'adj1':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'adj2':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'adj3':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'adverb1':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'adverb2':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'adverb3':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break
                
                case 'prep1':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'prep2':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'prep3':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'verb1':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'verb2':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break

                case 'verb3':
                    res.status(400).send({
                        error: 'Please use English characters only.'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid poem creation.'
                    })
            }
        }else {
            next()  // Go to next line defined in the routes.js file
        }
    }
}