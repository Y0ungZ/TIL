'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const set = new Set();

for (let i = 0; i < input.length; i++) {
  let string = '';
  for (let j = i; j < input.length; j++) {
    string += input[j];
    set.add(string);
  }
}

console.log(set.size);
