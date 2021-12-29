'use strict';

const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const number = [];
let result = '';

const makeNM = (depth, current) => {
  if (depth === M) {
    result += `${number.join(' ')}\n`;
    return;
  }
  for (let i = current; i <= N; i++) {
    number[depth] = i;
    makeNM(depth + 1, i);
  }
};

makeNM(0, 1);

console.log(result);
