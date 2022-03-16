const http = require('http')
const { readFileSync } = require('fs')

// MIME types indicate web document format as served by a server
// (express does these automatically)
// We specify below that this doc's mime type is html

// get all files
const homePage = readFileSync('./homepage.html')

const server = http.createServer((req,res)=> {
  // console.log(req.method)
  // console.log(req.url)
  // content-type can take text/html or text/plain
  // If sending back a status code with writeHead, make sure it's the right one
  const url = req.url
  if (url === '/') {
    res.writeHead(200,{'content-type': 'text/html'})
    // Pass content to the res.write (not necessary but nice)
    res.write(homePage)
    res.end()
  } else if (url === '/about') {
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<h1>Your about page here</h1>')
    res.end('About page :)')
  } else {
    // 404
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>404: page not found</h1><br /><a href="/">Back to safety</a>')
    res.end()
  }
})

server.listen(6969)