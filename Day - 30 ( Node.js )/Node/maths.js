// module.exports Types

// #1 exports from same folder from 1 file to 2 file

// 1

// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14;

// module.exports = 123;

// let obj = {
//   sum: sum,
//   mul: mul,
//   g: g,
//   PI: PI,
// };

// module.exports = obj;

// 2

// module.exports = {
//   sum: sum,
//   mul: mul,
//   g: g,
//   PI: PI,
// };

// 3

// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

// 4

// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
// exports.g = 9.8;
// exports.PI = 3.14;

// 5

// module.exports = 5; -> it is valid statement
// exports = 5; -> This will give an error because here JS Will treat(see) this exports as normal variable rather than obj
// JS will not see this exports as module.exports(it need to be an object which contains some value or function)

// import module -> require vs import
// 1) we can use require and exports(module.exports)
// 2) we can use import and export
// note -> don't use both only 1 is allowed at a time

export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const g = 9.8;
export const PI = 3.14;
