//import configs server
const {app,port} = require('../server')

//routes
const index = require('./routes/index')(app)
const sobre = require('./routes/sobre')(app)


//escuta do servidor(servidor esperando a requisição)
app.listen(port, () => {
    console.log(`Servidor escutamdo em http://localhost:${port}`)
})

