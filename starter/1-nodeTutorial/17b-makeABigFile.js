// FIRST - LETS CREATE A BIG FILE TO READ
const { writeFileSync } = require('fs')

for (let i = 0; i < 1000; i++) {
  writeFileSync('./content/bigFile.txt', `hello james. this is your ${i}th log :)`, { flag: 'a' })
}