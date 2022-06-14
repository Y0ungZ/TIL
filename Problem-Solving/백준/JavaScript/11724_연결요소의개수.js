const bfs = (start, adjList, visit) => {
  const queue = [];
  queue.push(start);
  visit[start] = true;
  let idx = 0;

  while (true) {
    const size = queue.length - idx;

    if (size === 0) {
      break;
    }

    for (let s = 0; s < size; s++) {
      const current = queue[idx++];
      const next = adjList[current];

      if (!next) {
        continue;
      }

      for (let n = 0; n < next.length; n++) {
        const vertex = next[n];

        if (!visit[vertex]) {
          queue.push(vertex);
          visit[vertex] = true;
        }
      }
    }
  }
};

const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [N, M] = input[0].trim().split(" ").map(Number);
  const adjList = {};
  const visit = Array(N + 1).fill(false);

  for (let i = 1; i <= N; i++) {
    adjList[i] = [];
  }

  for (let m = 0; m < M; m++) {
    const [a, b] = input[1 + m].trim().split(" ").map(Number);
    adjList[a].push(b);
    adjList[b].push(a);
  }

  let answer = 0;

  for (let i = 1; i <= N; i++) {
    const current = adjList[i];
    if (current && !visit[i]) {
      answer++;
      bfs(i, adjList, visit);
    }
  }

  console.log(answer);
})();
