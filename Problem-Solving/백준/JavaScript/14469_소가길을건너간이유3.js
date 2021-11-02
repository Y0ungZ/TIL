'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0].trim());
const cow = [];

for (let i = 1; i <= N; i++) {
  const [s, e] = input[i].trim().split(' ').map(Number);
  cow.push([s, e]);
}

cow.sort((a, b) => a[0] - b[0]);

let time = 0;

for (let i = 0; i < N; i++) {
  if (cow[i][0] > time) {
    time = cow[i][0] + cow[i][1];
  } else {
    time += cow[i][1];
  }
}
console.log(time);
