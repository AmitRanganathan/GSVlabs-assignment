module.exports = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'poemgenerator',
        user: process.env.DB_USER || 'poemgenerator',
        password: process.env.DB_PASS || 'poemgenerator',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './poemgenerator.sqlite'
        }      
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}