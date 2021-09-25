'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const K = Number(input[0]);
const CBT = input[1].trim().split(' ');
const level = [];

for (let i = 0; i < K; i++){
    level.push([]);
}

const visit = (floor,arr) => {
    if (floor === K) {
        return;
    }

    const middle = parseInt(arr.length / 2);
    
    level[floor].push(arr[middle]);
    
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
    
    visit(floor + 1, leftArr);
    visit(floor + 1, rightArr);
    


}

visit(0, CBT);

for (let i = 0; i < K; i++){
    let result = '';
    for (let j = 0; j < level[i].length; j++){
        result += `${level[i][j]} `;
    }
    console.log(result);
}