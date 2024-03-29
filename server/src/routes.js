const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PoemsControllerPolicy = require('./policies/PoemsControllerPolicy')
const PoemsController = require('./controllers/PoemsController')

// Declaring routes that point to controllers
module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login', 
        AuthenticationController.login)


    app.get('/poems', 
        PoemsController.index)

    app.post('/poems', 
        PoemsControllerPolicy.post,
        PoemsController.post)
    app.get('/poems/:poemId', 
        PoemsController.show)
    app.put('/poems/:poemId', 
        PoemsController.put)
    app.delete('/poems/:poemId', 
        PoemsController.delete)

    
}
