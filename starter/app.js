// Run code here :)

const http = require('http');

const server = http.createServer((req,res) => {
  if (req.url === '/') {
    res.end('Home page')
  } else if (req.url === '/about') {
    for (let i = 0; i > 0; i++) {
      console.log('Major error')
    }
    res.end('About page')
  } else {
    res.end('Error page')
  }
})

server.listen(6969, ()=> {
  console.log('Server listening on port 6969...')
})