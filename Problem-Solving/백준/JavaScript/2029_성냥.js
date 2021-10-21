"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const map = [];

for (let i = 0; i < 10; i++) {
  const temp = input[i].trim();
  const tempMap = [];
  for (let j = 0; j < 10; j++) {
    tempMap.push(temp[j]);
  }
  map.push(tempMap);
}

let oneByone = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (
      map[3 * i][1 + 3 * j] === "-" &&
      map[1 + 3 * i][3 * j] === "|" &&
      map[1 + 3 * i][3 + 3 * j] === "|" &&
      map[3 + 3 * i][1 + 3 * j] === "-"
    ) {
      oneByone++;
    }
  }
}

let twoBytwo = 0;
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    if (
      map[3 * i][1 + 3 * j] === "-" &&
      map[3 * i][4 + 3 * j] === "-" &&
      map[1 + 3 * i][3 * j] === "|" &&
      map[4 + 3 * i][3 * j] === "|" &&
      map[1 + 3 * i][6 + 3 * j] === "|" &&
      map[4 + 3 * i][6 + 3 * j] === "|" &&
      map[6 + 3 * i][1 + 3 * j] === "-" &&
      map[6 + 3 * i][4 + 3 * j] === "-"
    ) {
      twoBytwo++;
    }
  }
}

let thrByThr = 0;
if (
  map[0][1] === "-" &&
  map[0][4] === "-" &&
  map[0][7] === "-" &&
  map[1][0] === "|" &&
  map[1][9] === "|" &&
  map[4][0] === "|" &&
  map[4][9] === "|" &&
  map[7][0] === "|" &&
  map[7][9] === "|" &&
  map[9][1] === "-" &&
  map[9][4] === "-" &&
  map[9][7] === "-"
) {
  thrByThr++;
}

let init = 24;
let sum = 0;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    if (map[3 * i][1 + 3 * j] === "-") {
      sum++;
    }
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    if (map[1 + 3 * i][3 * j] === "|") {
      sum++;
    }
  }
}

console.log(`${init - sum} ${oneByone + twoBytwo + thrByThr}`);
