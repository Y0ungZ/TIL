'use strict';

//map
const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].trim().split(' ').map((num) => Number(num));
input = input.splice(1);

const map = new Map();

for (let i = 0; i < N; i++){
    map.set(input[i].trim(),true);
}

let result = 0;
for (let i = 0; i < M; i++){
    if (map.get(input[N + i].trim()) === true) {
        result++;
    }
}

console.log(result);