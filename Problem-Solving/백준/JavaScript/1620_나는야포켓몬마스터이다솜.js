const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M] = input[0].trim().split(" ").map(Number);
  const nameMap = new Map();
  const numberMap = new Map();

  for (let n = 1; n <= N; n++) {
    const current = input[n].trim();
    nameMap.set(current, n);
    numberMap.set(n, current);
  }

  const answer = [];

  for (let m = 0; m < M; m++) {
    const current = input[1 + N + m].trim();
    if (parseInt(current)) {
      answer.push(numberMap.get(+current));
    } else {
      answer.push(nameMap.get(current));
    }
  }

  console.log(answer.join("\n"));
})();
