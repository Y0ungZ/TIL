'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].trim().split(' ').map(Number);
const map = new Map();

for (let i = 0; i < N; i++) {
  const [site, password] = input[1 + i].trim().split(' ');

  map.set(site, password);
}

let result = '';
for (let i = 0; i < M; i++) {
  const site = input[1 + N + i].trim();

  result += `${map.get(site)}\n`;
}
console.log(result);
