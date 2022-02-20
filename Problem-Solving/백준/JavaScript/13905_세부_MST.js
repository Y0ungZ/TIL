'use strict';

const findParent = (parents, x) => {
  if (parents[x] === x) {
    return x;
  }
  parents[x] = findParent(parents, parents[x]);
  return parents[x];
};

const union = (parents, a, b) => {
  let rootA = findParent(parents, a);
  let rootB = findParent(parents, b);

  if (rootA < rootB) {
    parents[rootB] = rootA;
  } else {
    parents[rootA] = rootB;
  }
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M] = input[0].trim().split(' ').map(Number);
  const [s, e] = input[1].trim().split(' ').map(Number);
  const parents = Array.from({ length: N + 1 }, () => 0);
  const edges = [];
  let cost = 1000000;

  for (let i = 1; i <= N; i++) {
    parents[i] = i;
  }

  for (let i = 0; i < M; i++) {
    const [h1, h2, k] = input[2 + i].trim().split(' ').map(Number);
    edges.push([h1, h2, k]);
  }

  edges.sort((a, b) => b[2] - a[2]);

  for (let i = 0; i < M; i++) {
    const [h1, h2, k] = edges[i];

    if (findParent(parents, s) === findParent(parents, e)) {
      break;
    }

    union(parents, h1, h2);

    cost = Math.min(cost, k);
  }

  if (findParent(parents, s) === findParent(parents, e)) {
    console.log(cost);
  } else {
    console.log(0);
  }
})();
