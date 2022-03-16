// Built in modules

// There are many modules built into node but the main ones are:
// os
// path
// fs
// http

// 1 - The built-in OS module
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user)

// method returns system uptime in seconds
console.log(`The system uptime is ${ os.uptime } seconds.`);

// current OS info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS);

///////////////////////////
// 2 - The path module
const path = require('path')

// This returns your path's default separator (for Mac and Win it's a slash)
console.log(path.sep);

// path.join will join path segments into a full path
const filepath = path.join('/content','test.txt');
console.log(filepath);

// Pass a valid filepath to path.basename for the filename (the base)
const base = path.basename(filepath);
console.log(base)

// This finds and returns the absolute path (the complete path)
const absolute = path.resolve(__dirname, 'content', 'test.txt')
console.log(absolute)

///////////////////////
// 3 - The FS module

// The filesystem module has blocking and non-blocking methods

// blocking methods end in sync for "synchronous" (unlike asynchronous)
const { readFileSync, writeFileSync } = require('fs');

// readFileSync reads files in your file system
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// writeFileSync writes files to your file system
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${ first }, ${ second }`,
  { flag: 'a' }
);

// the flag object is optional, but flag with a value of 'a' appends new text to a specific file rather than replacing it (the default)

// non-blocking methods are asynchronous
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err,result)=> {
  if (err) {
    console.log(err)
    return null
  }
  const first = result;
  readFile('./content/second.txt', "utf-8", (err,result)=> {
    if (err) {
      console.log(err)
      return null
    }
    const second = result;
    writeFile('./content/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err,result)=> {
      if (err) {
        console.log(err)
        return null
      }
      console.log(result);
    })
  });
});

// Look below at how the synchronous code returns before the asynchronous
console.log('start')

const newFirst = readFileSync('./content/first.txt', 'utf-8');
const newSecond = readFileSync('./content/second.txt', 'utf-8');

writeFile(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  (err,result)=> {
    if (err) {
      console.log(err)
      return null
    }
    console.log('Done with async task...')
  }
)

console.log('Done with sync task')
console.log('starting the next one...')