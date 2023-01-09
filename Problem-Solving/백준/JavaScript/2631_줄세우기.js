const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const N = +input[0].trim();
  const dp = Array(N).fill(1);
  const sequence = [];
  let lis = 0;

  for (let n = 1; n <= N; n++) {
    sequence.push(+input[n].trim());
  }

  for (let i = 1; i < N; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i]) {
        count = Math.max(count, dp[j]);
      }
    }
    dp[i] = count + 1;
    lis = Math.max(lis, dp[i]);
  }

  console.log(N - lis);
})();
