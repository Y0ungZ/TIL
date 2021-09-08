"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
for (let i = 0; i < N; i++){
    const quiz = input[i + 1].trim();
    let score = 0;
    let continuity = 0;
    for (let j = 0; j < quiz.length; j++){
        let current = quiz[j];
        if (current === 'O') {
            continuity += 1;
            score += continuity;
        } else {
            continuity = 0;
        }
        
    }
    console.log(score);
}

