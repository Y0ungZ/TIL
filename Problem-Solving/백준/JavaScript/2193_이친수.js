const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const N = +fs.readFileSync(filePath).toString().trim();
  const dp = Array(91).fill(BigInt(0));

  dp[1] = BigInt(1);

  for (let n = 2; n < 91; n++) {
    dp[n] = dp[n - 1] + dp[n - 2];
  }

  console.log(dp[N].toString());
})();
