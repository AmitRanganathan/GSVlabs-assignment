const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


function hashPassword(user, options) {
    const SALT_FACTOR = 8
    
    if(!user.changed('password')) {
        return;
    }
    return bcrypt.genSaltAsync(SALT_FACTOR).then(salt => bcrypt.hashAsync(user.password, salt, null)).then(hash => {
        user.setDataValue('password', hash)
    })
}


/**
 * Set up the schema for a user table which will be in our database.
 * Contains email and password fields (columns)
 */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }

    return User
}





