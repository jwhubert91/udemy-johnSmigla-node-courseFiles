// npm packages

// Visit npmjs.com for a registry of all npm packages

// package, dependency and module are all ways of referring to an npm package
// Weekly downloads are a good indication of whether a pkg is safe

// npm - a global command that comes with node
// npm --version ...this checks the npm version you have

// npm i ...installs the package name following i to your current project

// npm i -g ...installs the package name following i globally to your filesystem
// sudo npm i -g ...on mac, this force installs (usually not a good idea)

// package.json ...this is a manifest file that stores important info about your project for npm
// Automatically generate the above file with `npm init` ...make sure you do this in the root of your project

// npm packages (aka dependencies) are stored in the dependencies object in package.json


// VERSIONING NPM PACKAGES -- covered in video 33
// Take a look at this example: lodash 4.17.20
// The largest number in the version number (furthest right) represents a major, breaking change
// The middle number (17) is a minor version number which is backwards compatible
// The smallest, leftmost number (20) is a patch or bug fix