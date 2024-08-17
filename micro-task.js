// const click = (number) => {
//   Promise.resolve().then(() => {
//     console.log("micro task: ", number);
//   });
//   console.log("log: ", number);
// };

const click = (number) => {
  setTimeout(() => console.log("timeout: ", number), 0);
  Promise.resolve().then(() => {
    Promise.resolve().then(() => console.log("Promise micro-task"));
    setTimeout(() => console.log("Promise timeout: ", number), 0);
    console.log("micro task: ", number);
  });
  console.log("log: ", number);
};

const script = () => {
  click(1);
  click(2);
  console.log("main");
};

script();
