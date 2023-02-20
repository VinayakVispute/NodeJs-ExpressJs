//CommonJS, Every file is module (by default)
//Modeules - Encapulation Code(Only Share Minimum)

const namesExported = require("./3.1-names");
const sayHi = require("./3.2-modules_function");
const data = require("./3.4-alternative_flavor");

// console.log(namesExported);

// sayHi(namesExported.vinayak);
// console.log("\n");
// sayHi(namesExported.jayesh);

// console.log(data);

require(`./3.5-mind-grenade`);
