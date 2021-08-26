"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let A = input[0];
let B = input[1];
let lengthA = A.length;
let lengthB = B.length;
let result = [];
let indexA = 0;
let indexB = 0;
let flag = false;

for (let i = 0; i < lengthB; i++){
    let temp = [];
    for (let j = 0; j < lengthA; j++){
        temp.push('.');
    }
    result.push(temp);
}

for (let i = 0; i < lengthA; i++){
    for (let j = 0; j < lengthB; j++){
        if (!flag && A[i] === B[j]) {
            flag = true;
            indexA = i;
            indexB = j;
        }
        
    }
}
for (let i = 0; i < lengthA; i++){
    result[indexB][i] = A[i];
}

for (let i = 0; i < lengthB; i++){
    result[i][indexA] = B[i];
}


for (let i = 0; i < lengthB; i++){
    let temp = '';
    for (let j = 0; j < lengthA; j++){
        temp += result[i][j];
    }
    console.log(temp);
}