let gameSeq = [];
let userSeq = [];
let btnS = ["yellow", "red", "purple", "green"];

let started = false;
let Level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  Level++;
  h2.innerText = `Level ${Level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = btnS[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randomBtn);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

let allBtnS = document.querySelectorAll(".btn");
for (btn of allBtnS) {
  btn.addEventListener("click", btnPress);
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${Level}</b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  Level = 0;
}
