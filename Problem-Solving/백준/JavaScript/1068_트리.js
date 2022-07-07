const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const trees = {};

  const N = +input[0].trim();
  const parents = input[1].trim().split(" ").map(Number);
  const removeNode = +input[2].trim();
  const visit = Array(N).fill(false);
  let root;
  let answer = 0;

  for (let i = 0; i < N; i++) {
    trees[i] = [];
  }

  for (let i = 0; i < N; i++) {
    if (parents[i] === -1) {
      root = i;
      continue;
    }

    trees[parents[i]].push(i);
  }

  const dfs = (current) => {
    if (visit[current]) {
      return;
    }

    visit[current] = true;
    const nextNode = trees[current];

    for (let i = 0; i < nextNode.length; i++) {
      if (nextNode.length === 1 && nextNode[i] === removeNode) {
        answer++;
        continue;
      }
      if (!visit[nextNode[i]] && !trees[nextNode[i]].length) {
        answer++;
      } else {
        dfs(nextNode[i]);
      }
    }
  };

  visit[removeNode] = true;
  dfs(root);

  console.log(answer);
})();
