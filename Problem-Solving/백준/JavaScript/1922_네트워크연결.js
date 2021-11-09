'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0].trim());
const M = Number(input[1].trim());

const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionFind = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }

  return parent;
};

let num = 0;
let parent = Array.from({ length: N + 1 }, () => num++);
const edge = [];
let result = 0;
for (let i = 0; i < M; i++) {
  const [a, b, c] = input[2 + i].trim().split(' ').map(Number);

  edge.push([a, b, c]);
}

edge.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < M; i++) {
  const [a, b, c] = edge[i];

  if (findParent(parent, a) !== findParent(parent, b)) {
    parent = unionFind(parent, a, b);
    result += c;
  }
}

console.log(result);
