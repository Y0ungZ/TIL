'use strict';

const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
//N(2 ≤ N ≤ 500,000). 쓸모없는 연산 줄이기.
//Call Stack Size Exceed 주의. 재귀 -> 반복문.
//시간초과가 나네... ㅠ.ㅠ
//Java로 풀었다... 💦 꼭 나중에 다시 도전해보기.
const N = Number(input[0]);
let adjList = {};

for (let i = 0; i < N; i++){
    adjList[i + 1] = [];
}

for (let i = 0; i < N - 1; i++){
    const [A,B] = input[i + 1].trim().split(' ');
    adjList[A].push(B);
    adjList[B].push(A);
}

let result = 0;

const callStack = [['1', '0', 0]];

while (callStack.length) {
    const [current, parent, cnt] = callStack.pop();
    
    for (let value of adjList[current]) {
        if (value !== parent) {
            callStack.push([value, current, cnt + 1]);
        }
    }

    if (adjList[current].length === 1) {
        result += cnt;
    }
}

console.log( result % 2 === 0 ?'No':'Yes');