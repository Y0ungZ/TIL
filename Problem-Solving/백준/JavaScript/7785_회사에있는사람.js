'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0].trim());
let set = new Set();

for (let i = 0; i < N; i++) {
  const [name, log] = input[1 + i].trim().split(' ');

  if (log === 'enter') {
    set.add(name);
  } else {
    if (set.has(name)) {
      set.delete(name);
    }
  }
}

set = Array.from(set).sort();
let result = '';
const length = set.length;

for (let i = length - 1; i >= 0; i--) {
  result += `${set[i]}\n`;
}

console.log(result);
