'use strict';

const findParent = (parent, x) => {
  if (parent[x] === x) {
    return x;
  }
  parent[x] = findParent(parent, parent[x]);
  return parent[x];
};

const union = (parent, a, b) => {
  let rootA = findParent(parent, a);
  let rootB = findParent(parent, b);

  if (rootA < rootB) {
    parent[rootB] = rootA;
  } else {
    parent[rootA] = rootB;
  }
};

(function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [V, E] = input[0].trim().split(' ').map(Number);
  const parent = Array.from({ length: V + 1 }, () => 0);
  const edges = [];

  for (let i = 0; i < E; i++) {
    const [A, B, C] = input[1 + i].trim().split(' ').map(Number);
    edges.push([A, B, C]);
  }

  edges.sort((a, b) => a[2] - b[2]);

  for (let i = 1; i <= V; i++) {
    parent[i] = i;
  }

  let cost = 0;

  for (let i = 0; i < E; i++) {
    const [A, B, C] = edges[i];

    if (findParent(parent, A) != findParent(parent, B)) {
      union(parent, A, B);
      cost += C;
    }
  }

  console.log(cost);
})();
