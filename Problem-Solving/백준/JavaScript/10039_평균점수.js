"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const length = input.length;
let result = 0;
for (let i = 0; i < length; i++) {
    let number = Number(input[i]);
    if (number < 40) {
        result += 40;
    } else {
        result += number;
    }
}
console.log(result/length);