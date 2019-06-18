const { Poem } = require('../models')


module.exports = {
    async index(req, res) {
        try{
            const poems = await Poem.findAll({
                limit: 5
            })
            res.send(poems)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch poems.'
            })
        }
    },
    async post(req, res) {
        try{
            const poem = await Poem.create(req.body)
            res.send(poem)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to create a poem.'
            })
        }
    }

}