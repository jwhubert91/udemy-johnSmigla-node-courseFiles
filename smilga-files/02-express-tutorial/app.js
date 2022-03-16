const http = require('http')

// MIME types indicate web document format as served by a server
// (express does these automatically)
// We specify below that this doc's mime type is html

const server = http.createServer((req,res)=> {
  // content-type can take text/html or text/plain
  // If sending back a status code with writeHead, make sure it's the right one
  res.writeHead(200,{'content-type': 'text/html'})
  // Pass content to the res.write (not necessary but nice)
  res.write('<h1>Your page here</h1>')
  res.end('Home page :)')
})

server.listen(6969)