'use strict';

const fs = require('fs');

//trim()을 안붙여주면 런타임에러(TypeError)가 나는구만요...
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.length;
const visit = [];

for (let i = 0; i < 6; i++){
    const temp = [];
    for (let j = 0; j < 6; j++){
        temp.push(false);
    }
    visit.push(temp);
}//initial setting

const knightX = [-2, -2, 2, 2, -1, -1, 1, 1];
const knightY = [-1, 1, -1, 1, -2, 2, -2, 2];
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let AcharCode = Number('A'.charCodeAt(0));
let result = 0;

for (let i = 0; i < N; i++){
    let current = input[i].trim();
    let x = Number(current[0].charCodeAt(0) - AcharCode);
    let y = Number(current[1]) - 1;
    let isOK = false;
    
    if (i === 0) {
        startX = x;
        startY = y;
        currentX = x;
        currentY = y;
        continue;
    }

    if (visit[y][x]) {
        result = 0;
        break;
    }

    for (let d = 0; d < 8; d++){
        let mX = currentX + knightX[d];
        let mY = currentY + knightY[d];

        if (mX === x && mY === y) {
            isOK = true;
        }
    }

    if (!isOK) {
        result = 0;
        break;
    }

    visit[y][x] = true;
    result++;
    currentX = x;
    currentY = y;

    if (i === 35) {
        for (let d = 0; d < 8; d++){
            let mX = currentX + knightX[d];
            let mY = currentY + knightY[d];
    
            //visit[startX][startY]는 false이다.
            if (mX === startX && mY === startY) {
                result++;
            }
        }
    }

}


if (result === 36) {
    console.log('Valid');
} else {
    console.log('Invalid');
}