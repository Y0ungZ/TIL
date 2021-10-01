"use strict";

const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const splitNumber = (str) => str.trim().split(" ").map(Number);
const [N, M, V] = splitNumber(input.shift());
const adj = Array.from({ length: N }, () => []);
const visit = Array.from({ length: N }, () => false);
let number;

const DFS = (current) => {
  visit[current] = true;
  number.push(current + 1);

  adj[current].forEach((node) => {
    if (!visit[node]) {
      DFS(node);
    }
  });
};

const BFS = (start) => {
  const queue = [];
  queue.push(start);
  number.push(start + 1);
  visit[start] = true;

  while (queue.length !== 0) {
    const current = queue.shift();

    adj[current].forEach((node) => {
      if (!visit[node]) {
        visit[node] = true;
        number.push(node + 1);
        queue.push(node);
      }
    });
  }
};

const solution = () => {
  input.forEach((info) => {
    const [a, b] = splitNumber(info);
    adj[a - 1].push(b - 1);
    adj[b - 1].push(a - 1);
  });

  adj.map((num) => num.sort((a, b) => a - b));

  number = [];
  DFS(V - 1);
  console.log(number.join(" "));

  visit.fill(false);

  number = [];
  BFS(V - 1);
  console.log(number.join(" "));
};

solution();
