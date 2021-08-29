"use strict";

const fs = require("fs");

const [N, M, ...cards] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let result = 0;
let max = 0;
let flag = false;
while (!flag) {   
    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                let sum =Number(cards[i])+ Number(cards[j]) + Number(cards[k]);
                if (sum > M) continue;
                if (sum == M) {
                    result = M;
                    flag = true;
                }
                if (max < sum) {
                    max = sum;
                    result = sum;
                }
            }
        }
    }

    flag = true;
}

console.log(result);