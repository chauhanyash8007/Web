// Node.js Allow JS To Run outside the browser

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//   console.log(args[i]);
// }

// console.log(process.argv);
// it Gives 2 value
// 1) executable path for node
// 2) current file path that we are running

// #1 Require from 1 file to 2 file

// By default module.exports  sends an empty object
// -> ./ require
// const someValue = require("./maths.js");
// console.log(someValue);
// console.log(someValue.sum(1, 2));
// console.log(someValue.PI);

// #2 Require From 1 folder(directory) to 2 folder
// ./ require
// const fruitsInfo = require("./Fruits");
// console.log(fruitsInfo);

// Extra
import { sum, PI } from "./maths.js";
// need to write full file name

console.log(sum(1, 2), PI);
// But this will give an error we can not just use export and import
// To solve this we have to write "type" : "module" into package.json file

// require
// 1) it's old method
// 2) require takes everything

// import
// 1) it's new method
// 2) import takes only selectively item

import { generate } from "random-words";
console.log(generate());
