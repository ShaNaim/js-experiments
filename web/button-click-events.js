const button = document.querySelector("button");
button.addEventListener("click", () => {
  setTimeout(() => {
    setTimeout(() => console.log("callbeck nested: ", 1), 0);
    Promise.resolve().then(() => console.log("micro-task", 1));
    console.log("callbeck: ", 1);
  }, 0);
  console.log("log: ", 1);
});

button.addEventListener("click", () => {
  setTimeout(() => {
    setTimeout(() => console.log("callbeck nested: ", 2), 0);
    Promise.resolve().then(() => console.log("micro-task", 2));
    console.log("callbeck: ", 2);
  }, 0);
  console.log("log: ", 2);
});
// button.click();
