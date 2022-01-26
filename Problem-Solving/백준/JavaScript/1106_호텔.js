'use strict';

(function () {
  const fs = require('fs');

  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [C, N] = input[0].trim().split(' ').map(Number);
  const city = [];
  const dp = Array.from({ length: C + 101 }, () => 1000000000);
  dp[0] = 0;

  for (let i = 0; i < N; i++) {
    const [price, customer] = input[1 + i].trim().split(' ').map(Number);
    city.push([price, customer]);
  }

  let result = 1000000000;

  for (let i = 0; i < N; i++) {
    const [price, customer] = city[i];

    for (let j = customer; j < C + 101; j++) {
      dp[j] = Math.min(dp[j], dp[j - customer] + price);

      if (j > C) {
        result = Math.min(result, dp[j]);
      }
    }
  }

  console.log(Math.min(result, dp[C]));
})();
