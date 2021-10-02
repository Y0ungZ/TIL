"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const subject = Array.from({ length: N }, () => BigInt(0));

for (let i = 0; i < N; i++) {
  const temp = input[1 + i].trim().split(" ");
  const subjectTime = Number(temp[0]);
  for (let j = 0; j < subjectTime; j++) {
    subject[i] |= BigInt(1) << BigInt(temp[1 + j] - 1);
  }
}

const M = Number(input[1 + N]);

for (let i = 0; i < M; i++) {
  const temp = input[2 + N + i].trim().split(" ");
  const emptyTime = Number(temp[0]);
  let result = 0;
  let studentTimeTable = BigInt(0);
  for (let j = 0; j < emptyTime; j++) {
    studentTimeTable |= BigInt(1) << BigInt(temp[1 + j] - 1);
  }
  studentTimeTable = ~studentTimeTable;
  for (let j = 0; j < N; j++) {
    if (!(subject[j] & studentTimeTable)) {
      result++;
    }
  }
  console.log(result);
}
