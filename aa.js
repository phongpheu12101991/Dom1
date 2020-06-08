const plus = document.getElementById("plus");
const number = document.getElementById("number");
const minus = document.getElementById("minus");

function plus1() {
  number.innerText = Number(number.innerText) + 1;
}
plus.addEventListener("click", plus1);
minus.addEventListener("click", minus1);
function minus1() {
  number.innerText = Number(number.innerText) - 1;
}

const b2 = document.getElementById("b2");
const div2 = document.getElementById("div2");
function changecolor() {
  if (div2.style.backgroundColor == "red") {
    div2.style.backgroundColor = "black";
  } else {
    div2.style.backgroundColor = "red";
  }
}
b2.addEventListener("click", changecolor);

const b3 = document.getElementById("b3");
const div3 = document.getElementById("div3");
function hide() {
  if (div3.style.visibility == "visible") {
    div3.style.visibility = "hidden";
    b3.innerText = "unhide";
  } else {
    div3.style.visibility = "visible";
    b3.innerText = "hide";
  }
}
b3.addEventListener("click", hide);

const b4 = document.getElementById("b4");
const div4 = document.getElementById("div4");
function randomcolor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  div4.style.backgroundColor = `rgb(${x}, ${y},${z})`;
}
b4.addEventListener("click", randomcolor);

const yes = document.getElementById("yes");
const no = document.getElementById("no");
const ccc = document.getElementById("ccc");
let x = 0;

function fb5() {
  if (yes.innerText == "Yes") {
    yes.innerText = "No";
    no.innerText = "Yes";
  } else {
    yes.innerText = "Yes";
    no.innerText = "No";
  }
  x = x + 1;
  if (x == 5) {
    ccc.style.visibility = "visible";
    yes.style.visibility = "hidden";
    no.style.visibility = "hidden";
  }
}

yes.addEventListener("mouseover", fb5);
no.addEventListener("mouseover", fb5);
