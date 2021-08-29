"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const N = input.length;

for (let i = 0; i < N-1; i++){
    let length = input[i].length;
    let sum = 2+(length-1);
    for (let j = 0; j < length; j++){
        switch (input[i][j]) {
            case
                '0':
                sum += 4;
                break;
            case '1':
                sum += 2;
                break;
            default:
                sum += 3;
                break;
                
        }
    }
    console.log(sum);
}