// let n = 5;

// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

// let args = process.argv;
// for (let i = 0; i < args.length; i++) {
//   console.log(args[i]);
// }

// const someValue = require("./maths");

// console.log(someValue);
// console.log(someValue.sum(1, 2));

// const info = require("./fruits");
// console.log(info);

import { sum, pi } from "./maths.js";
import { generate } from "random-words";
console.log(generate());
console.log(sum(1, 2));
