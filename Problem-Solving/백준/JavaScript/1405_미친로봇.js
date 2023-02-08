const main = (() => {
  const MAX_VALUE = 29;
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
  const N = input[0];
  const directionPer = input.slice(1).map((per) => (per /= 100));
  const di = [0, 0, 1, -1];
  const dj = [1, -1, 0, 0];
  const isVisit = Array.from({ length: MAX_VALUE }, () => Array(MAX_VALUE).fill(false));
  let answer = 0;

  const dfs = (length, i, j, percentage) => {
    if (length === N) {
      answer += percentage;
      return;
    }

    isVisit[i][j] = true;

    for (let d = 0; d < 4; d++) {
      const nextI = i + di[d];
      const nextJ = j + dj[d];

      if (isVisit[nextI][nextJ]) {
        continue;
      }

      if (nextI < 0 || nextI >= MAX_VALUE || nextJ < 0 || nextJ >= MAX_VALUE) {
        continue;
      }

      if (directionPer[d] === 0) {
        continue;
      }

      dfs(length + 1, nextI, nextJ, percentage * directionPer[d]);
      isVisit[nextI][nextJ] = false;
    }
  };

  dfs(0, 14, 14, 1);
  console.log(Number.isInteger(answer) ? answer.toFixed(1) : answer);
})();
