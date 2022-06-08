const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const T = +input[0].trim();
  const dp = Array(41).fill([0, 0]);

  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i < 41; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }

  const answer = [];

  for (let t = 0; t < T; t++) {
    const currentInput = +input[1 + t].trim();
    const [zero, one] = dp[currentInput];
    answer.push(`${zero} ${one}`);
  }

  console.log(answer.join("\n"));
})();
