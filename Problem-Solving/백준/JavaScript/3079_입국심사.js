'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].trim().split(' ').map(Number);
const judge = Array.from({ length: N }, () => BigInt(0));
let maxValue = BigInt(0);

for (let i = 0; i < N; i++) {
  judge[i] = BigInt(input[1 + i].trim());
  if (maxValue < judge[i]) {
    maxValue = judge[i];
  }
}

let left = BigInt(0);
let right = maxValue * BigInt(M);
let mid = 0;
let result = left + right;

while (left <= right) {
  mid = (left + right) / BigInt(2);

  let cnt = BigInt(0);

  for (let i = 0; i < N; i++) {
    cnt += mid / judge[i];
  }

  if (cnt < M) {
    left = mid + BigInt(1);
  } else {
    right = mid - BigInt(1);
    result = mid;
  }
}

console.log(String(result));
