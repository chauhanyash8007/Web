// let smallImg = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImg.length; i++) {
//   smallImg[i].src = "Web_of_Spider-Man_Vol_1_129-1.png";
//   console.dir(smallImg[i]);
//   console.log(`the value of image no ${i} is changed`);
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));

// let para = document.querySelector("p");
// console.dir(para);
// console.dir(para.innerText);
// console.dir(para.innerHTML);
// console.dir(para.textContent);

// let heading = document.querySelector("h1");
// console.log(heading.classList.add("abc"));
// console.log(heading.classList);

// console.log((heading.innerHTML = `<u>${heading.innerText}</u>`));
// console.log(heading.innerHTML);

// let a = document.querySelectorAll("div a");
// for (let i = 0; i < a.length; i++) {
//   a[i].style.color = "yellow";
// }
// let img = document.querySelector("img");
// console.log(img.classList);

let para = document.createElement("p");
para.innerText = "hey I,am red";
document.querySelector("body").append(para);

para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
document.querySelector("body").append(div);
div.classList.add("div");

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
document.querySelector("div").append(h1);

let p = document.createElement("p");
p.innerText = "ME TOO!";
document.querySelector("div").append(p);
