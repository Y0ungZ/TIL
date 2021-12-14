'use strict';

const fs = require('fs');

const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const visit = Array.from({ length: N + 1 }, () => false);
const result = Array.from({ length: M }, () => 0);

let list = '';

const makeNM = (cnt) => {
  if (cnt === M) {
    let temp = '';
    for (let i = 0; i < M; i++) {
      temp += `${result[i]} `;
    }
    list += `${temp}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visit[i]) {
      continue;
    }
    result[cnt] = i;
    visit[i] = true;
    makeNM(cnt + 1);
    visit[i] = false;
  }
};

makeNM(0);
console.log(list);
