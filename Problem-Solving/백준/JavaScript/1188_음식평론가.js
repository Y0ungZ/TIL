'use strict';

const fs = require('fs');

const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

if (N > M) {
  result = gcd(N, M);
} else {
  result = gcd(M, N);
}

console.log(M - result);
