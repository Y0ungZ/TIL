'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let index = 0;
const T = Number(input[index++].trim());
let answer = '';

const GCD = (a, b) => {
  if (b === 0) {
    return a;
  } else return GCD(b, a % b);
};

const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};

for (let i = 0; i < T; i++) {
  const [A, B] = input[index++].trim().split(' ').map(Number);
  if (A > B) {
    answer += `${LCM(A, B)}\n`;
  } else {
    answer += `${LCM(B, A)}\n`;
  }
}
console.log(answer);
