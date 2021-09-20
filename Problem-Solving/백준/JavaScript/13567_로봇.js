"use strict";

const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const MN = input[0].trim().split(" ");
input = input.splice(1);
const M = Number(MN[0]);
const N = Number(MN[1]);

let ci = 0;
let cj = 0;
let cd = 0;
const di = [1, 0, -1, 0];
const dj = [0, -1, 0, 1];
let flag = true;

const isIn = (x, y) => {
  if (x > M || y > M || x<0 || y<0) {
    return false;
  }
  return true;
};

for (let i = 0; i < N; i++) {
  let current = input[i].trim().split(" ");
  let command = current[0];
  let number = Number(current[1]);

  switch (command) {
    case "TURN":
      if (number === 0) {
        //반시계
        cd = (cd + 3) % 4;
      } else {
        //시계
        cd = (cd + 1) % 4;
      }
      break;
    case "MOVE":
      let mi = di[cd] * number;
      let mj = dj[cd] * number;

      ci += mi;
      cj += mj;

      if (!isIn(ci, cj)) {
        flag = false;
      }
      break;
    default:
      break;
  }

  if (!flag) {
    break;
  }
}

if (flag) {
  console.log(`${ci} ${cj}`);
} else {
  console.log(-1);
}
