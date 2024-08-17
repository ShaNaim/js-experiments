// const click = (number) => {
//   setTimeout(() => {
//     console.log("callbeck: ", number);
//   }, 0);
//   console.log("log: ", number);
// };

// const click = (number) => {
//   setTimeout(() => {
//     setTimeout(() => console.log("callbeck nested: ", number), 0);
//     console.log("callbeck: ", number);
//   }, 0);
//   console.log("log: ", number);
// };

const click = (number) => {
  setTimeout(() => {
    setTimeout(() => console.log("callbeck nested: ", number), 0);
    Promise.resolve().then(() => console.log("micro-task", number));
    console.log("callbeck: ", number);
  }, 0);
  console.log("log: ", number);
};

const script = () => {
  click(1);
  click(2);
  console.log("main");
};

script();
