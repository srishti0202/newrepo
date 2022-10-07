//Modules
//CommonJS, every file in node is a module(by default)
//Modules - Encapsulated code (only share minimum)

const {name1, name2} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade');


console.log(data);
sayHi('susan');
sayHi(name1);
sayHi(name2);