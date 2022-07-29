const express = require('express')
const routerDatos = require('./src/rutas/datos')

const app = express()
app.use(express.json())

app.use('/api/datos', routerDatos)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor en linea en el puerto '+PORT)
})
server.on('error', error => console.log(error))