const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const T = +input[0].trim();
  const dp = Array(12).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i < 12; i++) {
    for (let j = 1; j < 4; j++) {
      dp[i] += dp[i - j];
    }
  }

  const answer = [];

  for (let t = 0; t < T; t++) {
    answer.push(dp[+input[1 + t].trim()]);
  }

  console.log(answer.join('\n'));
})();
