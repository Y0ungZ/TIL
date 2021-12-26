'use strict';

const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const number = [];
let result = '';

const makeNM = (depth) => {
  if (number.length === M) {
    result += number.join(' ');
    result += '\n';
    return;
  }

  for (let i = depth + 1; i <= N; i++) {
    number.push(i);
    makeNM(i);
    number.pop();
  }
};

for (let i = 1; i <= N; i++) {
  number.push(i);
  makeNM(i);
  number.pop();
}

console.log(result);
