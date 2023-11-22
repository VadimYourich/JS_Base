"use strict";

window.onresize = function () {
  console.log("Width = ".concat(window.innerWidth, "px\nHeight = ").concat(window.innerHeight, "px"));
}; // window.onbeforeunload = (e) => {
//   e.preventDefault();
// };


document.querySelector(".back-button").onclick = function () {
  history.back();
};

document.querySelector(".next-button").onclick = function () {
  history.forward();
};