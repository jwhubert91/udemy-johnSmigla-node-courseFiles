const { readFile, writeFile } = require('fs')
const util = require('util')

// Instantiate readFilePromise and writeFilePromise
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const FIRST_PATH_STRING = './content/first.txt'
const SECOND_PATH_STRING = './content/second.txt'

const start = async ()=> {
  try {
    const first = await readFilePromise(FIRST_PATH_STRING, 'utf-8')
    const second = await readFilePromise(SECOND_PATH_STRING, 'utf-8')
    await writeFilePromise('./content/promisifyText.txt', `Here you go: ${first}, ${second}.`)
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()