'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); //컴퓨터의 수
const connect = Number(input[1]); //이어진 쌍의 수
const computer = input.splice(2); 
const network = []; //인접배열
const visit = []; //방문여부


for (let i = 0; i < N; i++){
    let temp = [];
    for (let j = 0; j < N; j++){
        temp.push(0);
    }
    network.push(temp);
} // initial setting

let temp = [];
for (let i = 0; i < N; i++){
    temp.push(false);
}
visit.push(temp);

for (let i = 0; i < connect; i++){
    let current = computer[i].split(' ');
    let A = Number(current[0]);
    let B = Number(current[1]);

    network[A - 1][B - 1] = 1;
    network[B - 1][A - 1] = 1;
}// end input 

let result = 0;

const spreadVirus = (number) => {

    if (visit[number]===true) {
        return;
    }
    
    visit[number] = true;
    result++;

    for (let i = 0; i < N; i++){
        if (network[number][i] === 1) {
            spreadVirus(i);
        }
    }
}

spreadVirus(0);
console.log(result-1);