'use strict';

const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].trim().split(' ').map((num) => Number(num));
input = input.splice(1)[0].split(' ').filter((num) => Number(num) >= 10);
N = input.length;
let result = 0;
let cutting = 0;
let sortArr = [];

for (let i = 0; i < N; i++){
    let temp = [];
    temp.push(Number(input[i]));
    temp.push(Number(input[i]) % 10);
    sortArr.push(temp);
}

//나머지가 0인(10의 배수)가 1순위, 같다면 숫자로 오름차 2순위.
sortArr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

for (let i = 0; i < N; i++){

    if (cutting >= M) {
        break;
    }

    let cake = 0;
    
    if (sortArr[i][1] === 0) {
        cutting += (sortArr[i][0] / 10) - 1;
        cake = sortArr[i][0] / 10;

        if (cutting > M) {
            cake -= (cutting-M+1);
        }
        result += cake;
    } else {
        cutting += parseInt(sortArr[i][0] / 10);
        cake = parseInt(sortArr[i][0] / 10);
        
        if (cutting > M) {
            cake -= (cutting-M);
        }
        result += cake;
    }
}

console.log(result);