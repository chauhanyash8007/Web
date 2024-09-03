// let btnS = document.querySelectorAll("button");
// console.dir(btnS);

// btn.onclick = function () {
//   console.log("button is clicked");
// };

// for (btn of btnS) {
// btn.onclick = sayHello;
// console.dir(btn);
// btn.onmouseenter = function () {
//   console.log("You Hover on the button");
// };
// btn.addEventListener("click", sayHello);
// btn.addEventListener("click", sayName);
// btn.addEventListener("dblclick", function () {
//   console.log("you double clicked");
// });
// }

// function sayHello() {
//   alert("Yash");
// }
// function sayName() {
//   alert("You Clicked");
// }

// btn.onclick = sayHello;

// Activity ->

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}
