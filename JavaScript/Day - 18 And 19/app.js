const student = {
    name : "Yash",
    age : 18,
    marks : 94.4
}

console.log(student);
console.log(student["name"]);
console.log(student.age);

const student1 = {
    Yash : {
        name : "Yash",
        age : 18,
        marks : 94.4
    },
    Rishi : {
        name : "Yash",
        age : 18,
        marks : 94.4
    },
    Priyanshu : {
        name : "Yash",
        age : 18,
        marks : 94.4
    },
    Karan : {
        name : "Yash",
        age : 18,
        marks : 94.4
    }
}
console.log(student1);

const student2 = [
    {
        name : "Yash",
        age : 18,
        marks : 94.4
    },
    {
        name : "Yash",
        age : 18,
        marks : 94.4
    },
    {
        name : "Yash",
        age : 18,
        marks : 94.4
    }
];
console.log(student2);

Math.floor(Math.random()*100)+1;
Math.floor(Math.random()*5)+1;

// guessing Game

const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max)+1;

let guess = prompt("Enter the guess");

while(true){
    if(guess =="quit"){
        console.log("user Quit");
        break;
    }

    if(guess==random){
        console.log("you are right ! random number was ", random);
        break;
    } else {
        guess = prompt("your guess was wrong. Please try again");
    }
}

while(true){
    if(guess =="quit"){
        console.log("user Quit");
        break;
    }

    if(guess==random){
        console.log("you are right ! random number was ", random);
        break;
    } else if(guess<random){
        guess=prompt("Hint : your guess was too small. Please try again");
    } else {
        guess=prompt("Hint : your guess was too big. Please try again");
    }
}

function hello(){
    console.log("hello");
}

hello();

function average(num1,num2,num3){
    return (num1+num2+num3)/3;
}
console.log(average(1,2,3));

function table(num){
    for(let i=1;i<=10;i++){
        console.log(`${i}'*'${num}=${i*num}`)
    }
}
table(5);

function sum(number){
    let sum = 0;
    for(let i=1;i<=number;i++){
        sum+=i;
    }
    return sum;
}

console.log(sum(10));