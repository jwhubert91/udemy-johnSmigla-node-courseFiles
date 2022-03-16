// Modules

// Node uses CommonJS under the hood, meaning every file is a module

const names = require('./4-firstModule');
const sayHi = require('./5-utils');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

const data = require('./6-alternativeModuleExports');

require('./7-mindGrenade');

// Remember that when you require a module, you invoke the code.
// The code will actually be executed when it is called.