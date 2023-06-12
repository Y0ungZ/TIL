const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const N = +input[0].trim();
  const numbers = [0];
  numbers.push(...input.slice(1).map(Number));
  const answer = [];

  const selectNumber = (visited, start, curr) => {
    if (visited[curr]) {
      if (curr === start) {
        answer.push(start);
      }
      return;
    }

    visited[curr] = true;
    selectNumber(visited, start, numbers[curr]);
  };

  for (let i = 1; i <= numbers.length; i++) {
    const visited = Array(numbers.length).fill(false);
    selectNumber(visited, i, i);
  }

  console.log(answer.length);
  console.log(answer.join("\n"));
})();
