'use strict';

const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const number = [];
let result = '';

const makeNM = (depth) => {
  if (depth === M) {
    result += `${number.join(' ')}\n`;
    return;
  }
  for (let i = 1; i <= N; i++) {
    number.push(i);
    makeNM(depth + 1);
    number.pop();
  }
};

makeNM(0);

console.log(result);
