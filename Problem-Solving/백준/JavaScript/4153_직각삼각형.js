"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.length;

for (let i = 0; i < N; i++){
    let current = input[i].split(' ');
    let a = Math.pow(Number(current[0]),2);
    let b = Math.pow(Number(current[1]), 2);
    let c = Math.pow(Number(current[2]),2);
    
    if (a === 0 && b === 0 && c === 0) {
        break;
    }

    if (a + b === c || b + c === a || c + a === b) {
        console.log('right');
    } else {
        console.log('wrong');
    }

}