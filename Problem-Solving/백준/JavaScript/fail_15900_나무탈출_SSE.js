'use strict';

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//N(2 ≤ N ≤ 500,000). 쓸모없는 연산 줄이기.
//StackSizeExceeded. NodeJS의 V8엔진 관련 콜스택 문제라고 한다.
//JS로 재귀를 구현할때는 주의해야 한다는 것을 알게됨.
//https://gywlsp.github.io/boj/2263/
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
const escape = (current, parent, cnt) => {

    for (let value of adjList[current]) {
        if (value !== parent) {
            escape(value,current, cnt+1);
        }
    }

    if (adjList[current].length === 1) {
        result += cnt;
        return;
    }
    
}

//type 주의! === 생각하기.
escape('1','0',0);

console.log( result % 2 === 0 ?'No':'Yes');