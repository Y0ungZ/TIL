'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arrN = input[1].trim().split(' ').map((num)=>parseInt(num));
const M = Number(input[2]);
const arrM = input[3].trim().split(' ');
let result = '';
arrN.sort((a, b) => a - b);

const BinarySearch = (number) => {
    let left = 0;
    let right = N - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let currentNum =arrN[mid];
        if (currentNum === number) {
            return true;
        } else if (currentNum > number) {
            right = mid - 1;
        } else {
            left = mid +1;
        }
    }

    return false;
}

for (let i = 0; i < M; i++){
    if (BinarySearch(Number(arrM[i]))) {
        result += `1\n`;
    } else {
        result += `0\n`;
    }
}

console.log(result);