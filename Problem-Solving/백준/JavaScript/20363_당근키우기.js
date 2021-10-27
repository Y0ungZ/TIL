'use strict';

const fs = require('fs');

let [X, Y] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;

const big = X > Y ? X : Y;
const small = X > Y ? Y : X;

result += big + small / 10;
result += small;

console.log(Math.floor(result));
