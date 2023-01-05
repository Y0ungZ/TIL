const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M] = input[0].trim().split(" ").map(Number);
  const prefixSumArr = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

  const originalArr = [];
  const answer = [];

  for (let n = 1; n <= N; n++) {
    originalArr.push(input[n].trim().split(" ").map(Number));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      prefixSumArr[i + 1][j + 1] = originalArr[i][j];
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j < N; j++) {
      prefixSumArr[i][j + 1] += prefixSumArr[i][j];
    }
  }
  for (let j = 1; j <= N; j++) {
    for (let i = 1; i < N; i++) {
      prefixSumArr[i + 1][j] += prefixSumArr[i][j];
    }
  }

  for (let m = N + 1; m <= N + M; m++) {
    const [x1, y1, x2, y2] = input[m].trim().split(" ").map(Number);
    if (x1 === x2 && y1 === y2) {
      answer.push(originalArr[x1 - 1][y1 - 1]);
      continue;
    }
    answer.push(
      prefixSumArr[x2][y2] -
        prefixSumArr[x1 - 1][y2] -
        prefixSumArr[x2][y1 - 1] +
        prefixSumArr[x1 - 1][y1 - 1]
    );
  }

  console.log(answer.join("\n"));
})();
