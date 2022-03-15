const http = require('http')

const server = http.createServer()

server.on('request', (req,res) => {
  res.end('Welcome to your server!')
})

server.listen(6969)

// http servers from the http module in node have events that extend the EventEmitter
// You can thus use the same events methods as you would on your own custom event emitters