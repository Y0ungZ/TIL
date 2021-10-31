'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, d, k, c] = input[0].trim().split(' ').map(Number);
const exist = Array.from({ length: d + 1 }, () => 0);
const arr = Array.from({ length: N }, () => 0);

for (let i = 0; i < N; i++) {
  arr[i] = Number(input[1 + i].trim());
}

let result = 0;
let sum = 0;

for (let i = 0; i < k; i++) {
  if (exist[arr[i]] === 0) {
    sum++;
  }
  exist[arr[i]]++;
}

for (let i = 1; i < N; i++) {
  if (sum >= result) {
    if (exist[c] === 0) {
      result = sum + 1;
    } else {
      result = sum;
    }
  }

  exist[arr[i - 1]]--;
  if (exist[arr[i - 1]] === 0) {
    sum--;
  }

  if (exist[arr[(i + k - 1) % N]] === 0) {
    sum++;
  }
  exist[arr[(i + k - 1) % N]]++;
}

console.log(result);
