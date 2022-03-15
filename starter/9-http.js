// The HTTP module

// Start a server on the port of your choice

const http = require('http');

const server = http.createServer((req,res)=> {
  if (req.url === '/') {
    res.end('Welcome to the home page')
  } else if (req.url === '/about') {
    res.end('This is the about page')
  } else { 
    res.end(`
      <h1>Oops!</h1>
      <p>We cannot find the page that you are looking for.</p>
      <a href="/">back home</a>
    `)
  }
});

server.listen(6969);