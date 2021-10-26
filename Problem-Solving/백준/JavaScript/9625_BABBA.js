'use strict';

const fs = require('fs');

const K = Number(fs.readFileSync('/dev/stdin').toString().trim());

let A = 1;
let B = 0;

for (let i = 0; i < K; i++) {
  let tempA = A;
  A = B;
  B = tempA + B;
}

console.log(`${A} ${B}`);
