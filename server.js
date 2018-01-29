require('dotenv').config() //load in environment variables

const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const productsRoutes = require('./products/productsRoutes')

server.use(bodyParser.json())

server.use([
    productsRoutes
])

server.listen(3000, () => {
    console.log('server listening at http://localhost:3000')
})