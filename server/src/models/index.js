const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

/**
 * Will load all files in this models folder that are not index.js and load them into sequelize
 */
fs.readdirSync(__dirname)
.filter((file) => 
    file != 'index.js'
)
.forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db