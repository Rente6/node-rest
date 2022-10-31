//configs do server
const express = require('express')
const app = express()
const port = process.env.PORT || 3030

//exportar as configs
module.exports = {app,port}