console.log("hello World");
let a = 1;
let b = 2;
let output = `sum is : ${a + b} Rupees`;
console.log(output);
console.log(output);
console.log(output);
console.log(1 < 2);
if (1 > 2) {
    console.log(false);
} else if (1 < 2) {
    console.log(true);
} else if (1 == 2) {
    console.log("invalid");
}

let color = "red";
if (color == "red") {
    console.log("STOP");
}
if (color == "yellow") {
    console.log("Slow Down");
}
if (color == "green") {
    console.log("Go");
}

let size = "XL";

if (size == "XL") {
    console.log(" price is Rs : 250");
} else if (size == "L") {
    console.log(" price is Rs : 250");
} else if (size == "M") {
    console.log(" price is Rs : 250");
} else {
    console.log(" price is Rs : 250");
}

let marks = 90;
if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {
    console.log("O");
    } else {
    console.log("A");
    }
} else {
    console.log("better luck next time");
}

let str = "apple";

if (str[0] === "a") {
    if (str.length > 3) {
    console.log("good string");
    }
} else {
    console.log("bad string");
}

let value = 7;

switch(value){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a valid day");
}

alert("something is wrong!");

console.log("Yash");
console.error("Yash");
console.warn("Yash");

let firstName = prompt("Enter name");
console.log(firstName);

let num = 10;
if(num % 10 ===0){
    console.log("good");
}else{
    console.log("bad");
}

let Name = prompt("Enter your name");
let age = prompt("Enter age");
let ans=`${Name} is ${age} years old `;
alert(`${Name} is ${age} years old`);

