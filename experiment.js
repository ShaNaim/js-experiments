const loop = () => Promise.resolve().then(loop);

const asyncClick = async (number) => {
  Promise.resolve().then(() => {
    setTimeout(() => console.log("Promise timeout: ", number), 0);
    console.log("micro task: ", number);
  });
  setTimeout(() => console.log("timeout: ", number), 0);
  console.log("log: ", number);
};

const asyncScript = async () => {
  await asyncClick(1);
  await asyncClick(2);
  console.log("async main");
};

const click = (number) => {
  setTimeout(() => console.log("timeout: ", number), 0);
  Promise.resolve().then(() => {
    Promise.resolve().then(() => console.log("Promise micro-task"));
    setTimeout(() => console.log("Promise timeout: ", number), 0);
    console.log("micro task: ", number);
  });
  //   loop();
  console.log("log: ", number);
};

const script = () => {
  click(1);
  click(2);
  console.log("main");
};

asyncScript();
// script();
