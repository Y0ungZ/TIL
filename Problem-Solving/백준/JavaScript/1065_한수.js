'use strict';

const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = 0;

if (N < 100) {
  result = N;
} else {
  result = 99;
  for (let i = 100; i <= N; i++) {
    let bak = Math.floor(i / 100);
    let ten = Math.floor((i % 100) / 10);
    let one = Math.floor((i % 100) % 10);

    if (bak - ten === ten - one) {
      result += 1;
    }
  }
}

console.log(result);
