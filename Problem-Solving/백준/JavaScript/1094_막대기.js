"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();
let result = 0;
for (let i = 0; i < 7; i++) {
  //64는 7비트
  if (input & (1 << i)) {
    result++;
  }
}

console.log(result);
