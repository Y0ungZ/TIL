"use strict";

const { timeStamp } = require('console');
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(/\s+/);
const T = input[0];
const command = input.slice(1);

let apartment = [];

for (let i = 0; i < 15; i++){
    let temp = [];
    for (let j = 0; j < 15; j++){
        if (i === 0) {
            temp.push(j);
            continue;
        }
        if (j === 1) {
            temp.push(1);
            continue;
        }
        temp.push(0);

    }
    apartment.push(temp);
}

for (let i = 1; i < 15; i++){
    for (let j = 2; j < 15; j++){
        apartment[i][j] += apartment[i][j - 1] + apartment[i - 1][j];
    }
}

let index = 0;
for (let i = 0; i < T; i++){
    let k = command[index++];
    let n = command[index++];

    console.log(apartment[k][n]);
}