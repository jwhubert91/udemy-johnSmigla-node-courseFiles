const express = require('express')
const server = express()

// The purpose of middleware:
// request => middleware => response

server.listen(6969, ()=> console.log(`Server is listenin' on port 6969`))