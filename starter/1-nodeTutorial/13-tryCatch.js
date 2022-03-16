const FIRST_PATH_STRING = './content/first.txt'
const SECOND_PATH_STRING = './content/second.txt'

const { readFile } = require('fs')

const getText = (path) => {
  return new Promise((resolve,reject)=> {
    readFile(path, 'utf-8', (err,data)=> {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// getText(FIRST_PATH_STRING)
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

const start = async ()=> {
  try {
    const first = await getText(FIRST_PATH_STRING)
    const second = await getText(SECOND_PATH_STRING)
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()