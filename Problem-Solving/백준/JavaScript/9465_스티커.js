'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let index = 0;
const T = Number(input[index++].trim());

for (let t = 0; t < T; t++) {
  const N = Number(input[index++].trim());
  const sticker = [];

  for (let i = 0; i < 2; i++) {
    const temp = input[index++].trim().split(' ').map(Number);
    const tempSticker = [];
    for (let j = 0; j < N; j++) {
      tempSticker.push(temp[j]);
    }
    sticker.push(tempSticker);
  }

  const dp = [];
  for (let i = 0; i < 3; i++) {
    //0:건너뛰기, 1:위, 2:아래
    const temp = [];
    for (let j = 0; j <= N; j++) {
      temp.push(0);
    }
    dp.push(temp);
  }

  for (let i = 1; i <= N; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[2][i - 1]);
    dp[1][i] = Math.max(dp[0][i - 1] + sticker[0][i - 1], dp[2][i - 1] + sticker[0][i - 1]);
    dp[2][i] = Math.max(dp[0][i - 1] + sticker[1][i - 1], dp[1][i - 1] + sticker[1][i - 1]);
  }

  console.log(Math.max(dp[0][N], dp[1][N], dp[2][N]));
}
