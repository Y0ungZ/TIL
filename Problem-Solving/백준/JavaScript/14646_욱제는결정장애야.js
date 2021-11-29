'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0].trim());
const sticker = Array.from({ length: N }, () => false);
const exist = Array.from({ length: N }, () => true);
const rotate = input[1].trim().split(' ').map(Number);
let result = 0;
let sum = 0;

for (let i = 0; i < 2 * N; i++) {
  if (exist[rotate[i] - 1]) {
    if (sticker[rotate[i] - 1]) {
      exist[rotate[i] - 1] = false;
      sticker[rotate[i] - 1] = false;

      if (sum > result) {
        result = sum;
      }
      sum--;
    } else {
      sticker[rotate[i] - 1] = true;
      sum++;
    }
  }
}

console.log(result);
