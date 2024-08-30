// forEach function

let arr = [1, 2, 3, 4, 5];

const print = function (element) {
  console.log(element);
};

arr.forEach(print);

arr.forEach(function (element) {
  console.log(element);
});

arr.forEach((element) => {
  console.log(element);
});

const student = [
  {
    name: "Yash",
    marks: 95,
  },
  {
    name: "Priyanshu",
    marks: 96,
  },
  {
    name: "Rishi",
    marks: 97,
  },
];

student.forEach((student) => {
  console.log(student.marks);
});

// map function

let num = [1, 2, 3, 4];

const double = num.map((element) => {
  return element * 2;
});

console.log(double);
const double1 = num.map((element) => {});

console.log(double1);

let gpa = student.map((element) => {
  return element.marks / 10;
});

console.log(gpa);

// filter function

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter((element) => element % 2 == 0);
console.log(even);

// every function (work like AND gate)

console.log([2, 4].every((el) => el % 2 == 0));
console.log([1, 2, 4].every((el) => el % 2 == 0));

// some function (work like OR gate)

console.log([1, 2, 4].some((el) => el % 2 == 0));

// reduce function

console.log(
  [1, 2, 3, 4].reduce((rel, el) => {
    console.log(rel);
    return rel + el;
  })
);

let numS = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = numS.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});

console.log(result);

let numS1 = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result1 = numS.reduce((min, el) => {
  if (min > el) {
    return el;
  } else {
    return min;
  }
});

console.log(result1);

let numbers = [90, 40, 100].every((el) => el % 10 == 0);
console.log(numbers);

// default parameters

function sum(a, b = 2) {
  console.log(a + b);
}
sum(1);

// spread

console.log(..."Yash");
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(...arr1);
console.log(Math.min(...arr1));

//

let arr4 = [1, 2, 3, 4, 5];
let newArr = [...arr4];
console.log(newArr);
console.log(...newArr);

let str = [..."Yash"];
console.log(str);

// arrays literal
let odd = [1, 3, 5, 7, 9];
let eveN = [2, 4, 6, 8, 10];

let ans = [...odd, ...eveN];
console.log(ans);

// objects literal

let data = {
  Name: "Yash",
  age: 21,
};

let dataCopy = { ...data, weight: 60 };
console.log(dataCopy);

// extra

let arr5 = [1, 2, 3, 4, 5];
let obj1 = { ...arr5 };
console.log(obj1);
let obj2 = { ..."hello" };
console.log(obj2);

// Rest

function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us", args[i]);
  }
}

sum(1, 2, 3, 4);

function min() {
  console.log(arguments);
  console.log(arguments.length);
  // arguments.push(1); // here argument is collection not an array so can not use array functions here
}
min(1, 2, 3, 4);

// destructuring

let names = ["tony", "bruce", "peter", "steve"];

let [winner, ...others] = names;
console.log(winner);
console.log(others);

// destructuring (object)

const student1 = {
  name: "Yash",
  age: 21,
  class: 10,
  subject: ["eng", "math", "phy"],
  username: "Yash123",
  password: 1234,
};

let { username: user, password: pass } = student1;
console.log(user);
console.log(pass);

//

let arr2 = [1, 2, 3, 4, 5];
let square = arr2.map((el) => {
  return el * el;
});

console.log(square);

let sum10 = square.reduce((sum, el) => {
  return sum + el;
});

console.log(sum10);

let avg = sum10 / arr2.length;
console.log(avg);

console.log(arr2.map((el) => el + 5));

let str4 = ["Yash", "Rishi", "Priyanshu", "Karan"];
console.log(str4.map((el) => el.toUpperCase()));

let doubleAndReturnArgs = (arr, ...args) => [arr, args.map((el) => el * 2)];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 6));

let mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObject({ a: 1, b: 2 }, { c: 3, d: 4 }));
