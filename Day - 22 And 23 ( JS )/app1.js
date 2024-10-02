// 2
// let btn = document.querySelector("button");
// console.dir(btn);

// btnS.onclick = function () {
//   console.log("button is clicked");
// };

// function sayHello() {
//   alert("Hello");
// }

// btn.onclick = sayHello;
// let btnS = document.querySelectorAll("button");

// for (btn of btnS) {
// btn.onclick = sayHello;
// btn.onclick = sayName; for this line can only give one event so for multiple events we need eventListener
// console.dir(btn);
// btn.onmouseenter = function () {
// console.log("You Hover on the button");
// };
// btn.addEventListener("click", sayHello);
// btn.addEventListener("click", sayName);
// btn.addEventListener("dblclick", function () {
//   console.log("you double clicked");
// });
// }

// 3

// function sayName() {
//   alert("You Clicked");
// }

// Activity 4->

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red},${green},${blue})`;
//   return color;
// }

// 5
// it works on multiple elements
// let para = document.querySelector("p");
// para.addEventListener("click", function () {
//   console.log("para clicked");
// });

// 6
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let para = document.querySelector("p");
// let btn = document.querySelector("button");
// function changeColor() {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// }
// h1.addEventListener(
//   "click",
//   changeColor
// console.dir(this);
// console.log(this);
// );
// h3.addEventListener("click", changeColor);
// para.addEventListener("click", changeColor);
// btn.addEventListener("click", changeColor);

// 7
// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("button clicked");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//   console.log("key was pressed");
//   console.log(event.key); // y the key that i have type from keyboard
//   console.log(event.code); // code of than key
// });
// inp.addEventListener("keyup", function () {
//   console.log("key was released");
// });

// 8 / 9
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// console.dir(form);
// console.log("form was submitted");
// let user = document.querySelector("#user");
// let user = this.elements[0]; // form.elements[0]
// let pass = document.querySelector("#pass");
// let pass = this.elements[1];
// console.dir(input); user
// console.log(user.value);
// console.log(pass.value);
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function () {
// it track only initial and final changes
//   console.log("input changed");
//   console.log("final value", this.value);
// });

// user.addEventListener("input", function () {
// it track every small changes
//   console.log("input event");
//   console.log("final value", this.value);
// });

// 10
let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener("input", function () {
  console.log(inp.value);
  p.innerText = inp.value;
});
// practice Question
let input = document.querySelector("#input");
input.addEventListener("mouseout", function () {
  console.log("mouseout");
});
input.addEventListener("keypress", function (event) {
  console.log("keypress", event.key);
});

window.addEventListener("scroll", function () {
  console.log("scroll");
});
// window.addEventListener("load", function () {
//   alert("load");
// });

let button = document.createElement("button");
button.innerText = "Button";
let body = document.querySelector("body");
body.append(button);

button.addEventListener("click", function () {
  button.style.backgroundColor = "green";
});

const input1 = document.querySelector("#name");
const h2 = document.querySelector("#heading");

input1.addEventListener("input", function () {
  const filteredValue = input1.value.replace(/[^a-zA-Z\s]/g, "");
  input1.value = filteredValue;
  h2.textContent = filteredValue;
});
