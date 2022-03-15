const http = require('http')

const server = http.createServer()

server.on('request', (req,res) => {
  res.end('Welcome to your server!')
})

server.listen(6969)