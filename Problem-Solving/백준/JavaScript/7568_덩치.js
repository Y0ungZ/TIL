"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...people] = input;
let result = '';
N = Number(N);
for (let i = 0; i < N; i++){
    let [kg, cm] = people[i].split(' ');
    let rank = 1;
    for (let j = 0; j < N; j++){
        if (i === j)
            continue;
        let [tempkg, tempcm] = people[j].split(' ');
        if (Number(kg) < Number(tempkg) && Number(cm) < Number(tempcm)) {
            rank++;
        } 
    }

    result += `${rank} `;
    

}

console.log(result);