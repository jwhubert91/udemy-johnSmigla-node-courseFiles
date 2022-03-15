// Events and the native events package

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// use .on and .off to subscribe and unsubscribe from events in Node
customEmitter.on('response', (name,id)=> {
  console.log(`Data received: user ${name} with id: ${id}`)
})
customEmitter.on('response', ()=> {
  console.log(`Some other logic here.`)
})

customEmitter.emit('response', 'john', 34)