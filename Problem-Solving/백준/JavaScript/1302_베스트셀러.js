"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0].trim());
const map = new Map();

for (let i = 1; i <= N; i++) {
  const current = input[i].trim();
  if (map.has(current)) {
    let num = map.get(current);
    map.set(current, ++num);
  } else {
    map.set(current, 1);
  }
}

const mapToArray = [...map];
mapToArray.sort((a, b) => {
  if (b[1] < a[1]) {
    return -1;
  } else if (b[1] > a[1]) {
    return 1;
  } else if (a[0] < b[0]) {
    return -1;
  } else {
    return 0;
  }
});

console.log(mapToArray[0][0]);
