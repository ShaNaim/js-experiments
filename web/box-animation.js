const animationButton = document.querySelector("button");
const viewportWidth = window.innerWidth;
const count = 1000;
let microCount = 0;
function moveBox(id = "div-1", value = 1) {
  const box = document.getElementById(id);
  let currentLeft = parseInt(window.getComputedStyle(box).left) || 0;
  if (value + currentLeft > viewportWidth) {
    currentLeft = 0;
  }
  box.style.left = currentLeft + value + "px";
}

animationButton.addEventListener("click", () => {
  callbeck();
  callbeck2();
  callbeck3();
  callbeck4();
  microtask();
});

function callbeck() {
  moveBox("div-1");
  requestAnimationFrame(callbeck);
}
function callbeck2() {
  moveBox("div-2");
  setTimeout(callbeck2, 0);
}

function callbeck3() {
  moveBox("div-3");
  setTimeout(callbeck3, 1000 / 60 - 4.7);
}

function callbeck4() {
  console.log("callback invoked");
  setTimeout(callbeck4, 1000 / 60 - 4.7);
}

function microtask() {
  if (count === microCount) return;
  console.log("microtask invoked");
  Promise.resolve().then(microtask);
  microCount++;
}
