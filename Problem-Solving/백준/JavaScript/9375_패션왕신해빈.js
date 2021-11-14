'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0].trim());
let index = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[index++].trim());
  const map = new Map();
  for (let n = 0; n < N; n++) {
    const [fashion, type] = input[index++].trim().split(' ');

    if (map.has(type)) {
      let temp = map.get(type);
      map.set(type, ++temp);
    } else {
      map.set(type, 1);
    }
  }

  let result = 1;

  for (let value of map.values()) {
    result *= value + 1;
  }
  console.log(result - 1);
}
