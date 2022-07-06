const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const trees = {};
  const N = +input[0].trim();
  const answer = Array(N - 1).fill(0);
  const visit = Array(N + 1).fill(false);

  for (let i = 1; i <= N; i++) {
    trees[i] = [];
  }

  for (let i = 0; i < N - 1; i++) {
    const [a, b] = input[1 + i].trim().split(" ").map(Number);
    trees[a].push(b);
    trees[b].push(a);
  }

  const dfs = (current) => {
    const nextVertex = trees[current];
    visit[current] = true;

    for (let i = 0; i < nextVertex.length; i++) {
      if (!visit[nextVertex[i]]) {
        answer[nextVertex[i] - 2] = current;
        dfs(nextVertex[i]);
      }
    }
  };

  dfs(1);

  console.log(answer.join("\n"));
})();
