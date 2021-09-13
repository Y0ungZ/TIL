"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let lastNum = Number(input[N]);
let result = 0;
for (let i = N-1; i >= 1; i--){
    if (lastNum <= Number(input[i])) {
        let decreaseStage = Number(input[i]) - lastNum + 1;
        input[i] -= decreaseStage ;
        result += decreaseStage;
    }
    lastNum = input[i];
}
console.log(result);

