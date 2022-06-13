const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const N = +fs.readFileSync(filePath).toString().trim();

  const dp = Array(N + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  console.log(dp[N] % 10007);
})();
