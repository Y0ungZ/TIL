'use strict';

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [N, K] = input[0].trim().split(' ').map(Number);
  const things = [];
  const dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));

  for (let i = 0; i < N; i++) {
    const [W, V] = input[1 + i].trim().split(' ').map(Number);
    things.push([W, V]);
  } //init settings

  things.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i <= N; i++) {
    const [W, V] = things[i - 1];
    for (let w = 1; w <= K; w++) {
      if (W <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - W] + V);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  console.log(dp[N][K]);
})();
