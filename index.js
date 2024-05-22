let score = 0;
let add1 = 1;
let add2 = 2;
let add3 = 3;

const homeScore = document.querySelector(".home-score");
const guestScore = document.querySelector(".guest-score");

function homeAdd1() {
  // console.log("clicked")
  homeScore.textContent = add1;
  add1 += 1;
}

function homeAdd2() {
  // console.log("clicked")
  homeScore.textContent = add2;
  add2 += 2;
}

function homeAdd3() {
  // console.log("clicked")
  homeScore.textContent = add3;
  add3 += 3;
}

function guestAdd1() {
  // console.log("clicked")
  guestScore.textContent = add1;
  add1 += 1;
}

function guestAdd2() {
  // console.log("clicked")
  guestScore.textContent = add2;
  add2 += 2;
}

function guestAdd3() {
  // console.log("clicked")
  guestScore.textContent = add3;
  add3 += 3;
}

function reset() {
  console.log("reset");
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  add1 = 1;
  add2 = 2;
  add3 = 3;
}
