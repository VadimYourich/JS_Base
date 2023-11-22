window.onresize = () => {
  console.log(
    `Width = ${window.innerWidth}px\nHeight = ${window.innerHeight}px`
  );
};
// window.onbeforeunload = (e) => {
//   e.preventDefault();
// };
document.querySelector(".back-button").onclick = () => {
  history.back();
};
document.querySelector(".next-button").onclick = () => {
  history.forward();
};
