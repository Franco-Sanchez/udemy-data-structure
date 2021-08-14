// Do an interactive console with JS

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is the length of the array? ", (size) => {
  arr = Array(Number(size));
  for (let i = 0; i < Number(size); i++) {
    arr[i] = i;
  }
  console.log(arr);
  rl.close();
});

rl.on("close", () => process.exit(0));
