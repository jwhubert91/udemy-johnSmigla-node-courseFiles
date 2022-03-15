// setTimeout(()=> console.log("setTimeout log"), 0);

// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")
// console.log("Standard log")

// Above, the setTimeout callback will only be run when the first thread is complete

const { readFile } = require('fs');

console.log('Started a first task')

readFile('./content/first.txt', 'utf-8', (err,result)=> {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})

console.log('starting next task...')

// Remember that ANY TIME a process is asynchronous, the process will be offloaded and run after the presently running thread.