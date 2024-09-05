// 1
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div clicked");
// });

// ul.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("ul clicked");
// });

// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li clicked");
//   });
// }

// 2 / 3
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = inp.value;
  ul.appendChild(li);

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  li.appendChild(delBtn);
});

// event bubbling is used here
ul.addEventListener("click", function (event) {
  // console.log(event.target.nodeName);
  if ((event.target.nodeName = "BUTTON")) {
    let li = event.target.parentElement;
    li.remove();
    console.log("deleted");
  }
});
