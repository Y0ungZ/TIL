'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C, W] = input[0].trim().split(' ').map(Number);
const tree = [];
let maxTree = 0;

for (let i = 0; i < N; i++) {
  const temp = Number(input[1 + i].trim());
  tree.push(temp);
  if (temp > maxTree) {
    maxTree = temp;
  }
}

let result = 0;

for (let i = 1; i <= maxTree; i++) {
  let sum = 0;

  for (let j = 0; j < N; j++) {
    const slice = Math.floor(tree[j] / i);
    const cutNum = tree[j] % i === 0 ? slice - 1 : slice;

    const price = slice * i * W - cutNum * C;
    if (price > 0) {
      sum += price;
    }
  }

  if (sum > result) {
    result = sum;
  }
}

console.log(result);
