'use strict';

const deliveryPepero = (weight, edges, N, s, e) => {
  const queue = [];
  const visit = Array.from({ length: N + 1 }, () => false);

  visit[s] = true;
  queue.push(s);

  let index = 0;

  while (queue.length !== index) {
    const current = queue[index++];

    if (current === e) {
      return true;
    }

    for (const [to, cost] of edges[String(current)]) {
      if (weight <= cost && !visit[to]) {
        visit[to] = true;
        queue.push(to);
      }
    }
  }

  return false;
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M] = input[0].trim().split(' ').map(Number);
  const [s, e] = input[1].trim().split(' ').map(Number);
  const edges = {};
  let low = 1;
  let high = 1000000;
  let cost = 0;

  for (let i = 1; i <= N; i++) {
    edges[i] = [];
  }

  for (let i = 0; i < M; i++) {
    const [h1, h2, k] = input[2 + i].trim().split(' ').map(Number);
    edges[h1].push([h2, k]);
    edges[h2].push([h1, k]);
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let result = deliveryPepero(mid, edges, N, s, e);

    if (result) {
      cost = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log(cost);
})();
