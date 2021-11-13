'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const [A, B] = input.split(':').map(Number);

const GCD = (a, b) => {
  if (b === 0) return a;
  else return GCD(b, a % b);
};

const Greatest = A > B ? GCD(A, B) : GCD(B, A);

console.log(`${A / Greatest}:${B / Greatest}`);
