'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.length;

const lotto = (s, visit, curIdx,curNum, num) => {
    if (curIdx === num) {
        if (curNum === 6) {   
            let answer = '';
            for (let i = 0; i < num; i++) {
                if (visit[i] === true) {       
                    answer += `${s[i]} `;
                }
            }
            console.log(answer);
        }
        return;
    }
    
    visit[curIdx] = true;
    lotto(s, visit, curIdx + 1,curNum+1, num);
    visit[curIdx] = false;
    lotto(s, visit, curIdx + 1,curNum, num);
};


for (let i = 0; i < N-1; i++){
    const current = input[i].trim().split(' ');
    const k = Number(current[0]);
    const s = [];
    const visit = [];
    for (let j = 0; j < k; j++){
        s.push(current[j + 1]);
        visit.push(false);
    }
    lotto(s, visit, 0, 0, k);
    console.log();
}