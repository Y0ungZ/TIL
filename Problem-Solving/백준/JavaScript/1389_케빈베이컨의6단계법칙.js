'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].trim().split(' ').map(Number);
const adj = [];

for (let i = 0; i <= N; i++) {
  adj.push(Array.from({ length: N + 1 }, () => 100));
}

for (let i = 0; i < M; i++) {
  const [A, B] = input[1 + i].trim().split(' ').map(Number);
  adj[A][B] = 1;
  adj[B][A] = 1;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (adj[i][k] + adj[k][j] < adj[i][j]) {
        adj[i][j] = adj[i][k] + adj[k][j];
      }
    }
  }
}

let result = [];
let min = 100;

for (let i = 1; i <= N; i++) {
  let sum = 0;
  for (let j = 1; j <= N; j++) {
    if (i === j) continue;
    sum += adj[i][j];
  }
  result.push(sum);
  if (min > sum) {
    min = sum;
  }
}

for (let i = 0; i < N; i++) {
  if (min === result[i]) {
    console.log(i + 1);
    break;
  }
}
