const { Poem } = require('../models')


module.exports = {
    // Used for declaring endpoints
    async indexedDB(req, res) {
        try{

        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred'
            })
        }
    }
    
    
}