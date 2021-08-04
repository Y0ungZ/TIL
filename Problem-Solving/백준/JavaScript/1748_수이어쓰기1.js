"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();
let N = Number(input);
let answer = 0;
let ten = Math.pow(10,N.toString().length - 1);
while (N > 0) {
    let temp = (N - ten + 1);
    let length = N.toString().length;
    let result = temp * length;
    answer += result;
    N -= temp;
    ten /= 10;
}

console.log(answer);