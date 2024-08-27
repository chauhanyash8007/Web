const sum = (a,b) =>{
    console.log(a+b);
};

const cube = n =>{
    console.log(n*n*n);
};

const mul = (a,b) => (
    a*b
)

console.log("Hi");

setTimeout(()=>{
    console.log("Yash")
},4000);

console.log("i am");

let id = setInterval(()=>{
    console.log("Hello")
},2000);

console.log(id);
clearInterval(id);

const arrayAverage = (arr) => {
  let total = 0;
  for (let numbers of arr) {
    total += numbers;
  }
  return total / arr.length;
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));

let num = 4;
const isEven = (num) => num % 2 == 0;

console.log(isEven(num));


const object = {
    message: 'Hello world',

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);


let length =4;

function callback(){
    console.log(this.length);
}


