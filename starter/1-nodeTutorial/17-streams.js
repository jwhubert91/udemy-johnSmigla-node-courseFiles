// Streams are used to read and write data sequentially

// Used often for large files or continuous data

// 4 types of streams in node:

// writeable - write data sequentially
// readable - read data sequentially
// duplex - do both sequentially
// transform - transform data while it is being read sequentially

// Example 1 - The below reads a stream and writes it synchronously with a file size limit of 90000
const {createReadStream} = require('fs');

const stream = createReadStream('./content/bigFile.txt', {
  highWaterMark: 90000,
  encoding: 'utf-8',
})

// default 64kb
// last buffer
// highWaterMark - control size


stream.on("data", (result)=> {
  console.log(result)
})
stream.on('error', ()=> {
  console.log('error')
})


// Example 2 - The below reads a stream and opens a pipe to write in chunks
const http = require('http')
const fs = require('fs')

http.createServer((req,res)=> {
  // const text = fs.readFileSync('./content/reallyBigFile.txt','utf-8')
  // res.end(text)
  const fileStream = fs.createReadStream('./content/reallyBigFile.txt','utf-8')
  fileStream.on('open', ()=> {
    fileStream.pipe(res)
  })
  fileStream.on('error', (err)=> {
    console.log(err)
  })
})
.listen(6969)