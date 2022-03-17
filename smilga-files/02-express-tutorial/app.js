const express = require('express')
const app = express();

// app.get() - read data
// app.post() - insert data
// app.put() - update data
// app.delete() - delete data
// app.all() - express method that works with all of the above...
// app.use() - method to use middleware
// app.listen() - instantiates a server on a given port

app.get('/',(req,res)=> {
  res.status(200)
  res.send('Home page :)')
})

app.get('/about',(req,res)=> {
  res.status(200).send('About page :)')
})

app.all('*', (req,res) => {
  res.status(404)
  res.send('<h1>Resource not found</h1>')
})

app.listen(6969, ()=> {
  console.log('Server is listening on port 6969')
})