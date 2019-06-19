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
    async show(req, res) {
        try{
            const poem = await Poem.findByPk(req.params.poemId)
            res.send(poem)
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
    },
    async put(req, res) {
        try{
            const poem = await Poem.update(req.body, {
                where: {
                    id: req.params.poemId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to update the poem.'
            })
        }
    },
    async delete(req, res) {
        try{
            const { poemId } = req.params
            const poem = await Poem.findByPk(poemId)
            console.log("in delete method")
            await poem.destroy()
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to delete the poem.'
            })
        }
    }

}