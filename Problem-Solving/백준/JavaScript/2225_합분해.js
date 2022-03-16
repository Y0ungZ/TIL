'use strict';

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, K] = input[0].split(' ').map(Number);
  const dp = Array.from(Array(K + 1), () => Array(N + 1).fill(0));

  for (let i = 0; i <= N; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= K; i++) {
    for (let j = 0; j <= N; j++) {
      for (let k = 0; k <= j; k++) {
        dp[i][j] += dp[i - 1][j - k];
      }
      dp[i][j] = dp[i][j] % 1000000000;
    }
  }

  console.log(dp[K][N]);
})();
