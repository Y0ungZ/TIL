const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const numbers = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")
    .map(Number)
    .sort((a, b) => a - b);

  const sum = numbers.reduce((prev, curr) => prev + curr);

  if (numbers[0] || sum % 3 !== 0) {
    console.log(-1);
  } else {
    console.log(numbers.reverse().join(""));
  }
})();
