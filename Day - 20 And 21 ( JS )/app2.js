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

let result1 = numS.reduce((max, el) => {
  if (max > el) {
    return el;
  } else {
    return max;
  }
});

console.log(result1);

let numbers = [90, 40, 100].every((el) => el % 10 == 0);
console.log(numbers);
