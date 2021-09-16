'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let rope = input.splice(1);


rope.sort((a, b) => b-a);

let result = 0;
let number = 1;

for (let i = 0; i < N; i++) {
    let weight = Number(rope[i]) * number;
    if (weight > result) {
        result = weight;
    }
    number++;
}

console.log(result);