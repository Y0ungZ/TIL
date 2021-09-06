"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const L = input[0];
const N = input[1];
let cake = [];

for (let i = 0; i < L; i++){
    cake.push(0);
} //init

let index = 2;
let expectedMaxPeople = 0;
let expectedMax = 0;
let realMaxPeople = 0;
let realMax = 0;
for (let i = 0; i < N; i++){
    const PK = input[index++].trim().split(/\s+/);
    //주의! Number안해줬다가 틀렸다.
    let P = Number(PK[0]);
    let K = Number(PK[1]);

    if (K - P > expectedMax) {
        expectedMax = K - P ;
        expectedMaxPeople = i + 1;
    }

    let count = 0;
    for (let j = P; j <= K; j++){
        if (cake[j-1] === 0) {
            count++;
            cake[j - 1] = i + 1;
        }
    }

    if (count > realMax) {
        realMax = count;
        realMaxPeople = i + 1;
    }
}


console.log(expectedMaxPeople);
console.log(realMaxPeople);