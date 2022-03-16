const { writeFileSync } = require('fs')

for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/reallyBigFile.txt', `hello james. this is your ${i}th log :)`, { flag: 'a' })
}