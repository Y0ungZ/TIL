"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = input.length;
let R = 1;
let C = 1;
let result = [];
function getRC(n) {
    let tempR = 1;
    let tempC = 1;
    while (tempR <= tempC) {
        tempC = parseInt(n / tempR);
        if (tempR * tempC === n) {
            if (tempR <= tempC) {
                R = tempR;
                C = tempC;
            }
        }
        tempR++;
    }

}

getRC(N);
let index = 0;
for (let i = 0; i < R; i++){
    let temp = [];
    for (let j = 0; j < C; j++){
        temp.push('');
    }
    result.push(temp);
}

for (let j = 0; j < C; j++){
    for (let i = 0; i < R; i++){
        result[i][j] = input[index++];
    }
}

let answer = '';

for (let i = 0; i < R; i++){
        for (let j = 0; j < C; j++){
        answer += result[i][j];
    }
}

console.log(answer);