"use strict";
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let N = Number(input[0]);
let M = Number(input[1]);
let L = Number(input[2]);
let countArr = [];
for (let i = 0; i < N; i++) {
    countArr.push(0);
}
let throwBall = 0;
let currentIndex = 0;

while (true) {

    countArr[currentIndex] += 1; //공 받기 카운트+1

    if (countArr[currentIndex] === M) { //현재 공 받은 사람이 M번을 받았다면
        break;
    }

    if (countArr[currentIndex] % 2 != 0) {
        //시계방향으로 L번 이동
        currentIndex = (currentIndex + L) % N;
    } else {
        //반시계방향으로 L번 이동
        currentIndex = (currentIndex + (N - L)) % N;
    }

    //공던지기

    throwBall += 1;
}

console.log(throwBall);

