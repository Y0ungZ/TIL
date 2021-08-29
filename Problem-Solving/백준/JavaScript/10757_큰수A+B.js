"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const A = BigInt(input[0]);
const B = BigInt(input[1]);
let result = A + B;
console.log(result.toString());