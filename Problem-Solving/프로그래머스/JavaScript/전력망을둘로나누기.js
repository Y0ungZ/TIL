function solution(n, wires) {
  let answer = 10000;
  let A = 0;
  let B = 0;

  function dfs(current, notVisit, trees, visited, type) {
    if (type === "A") {
      A++;
    } else {
      B++;
    }

    if (visited[current]) {
      return;
    }

    visited[current] = true;

    for (let i = 0; i < trees[current].length; i++) {
      const child = trees[current][i];
      if (child === notVisit) {
        continue;
      }
      if (visited[child]) {
        continue;
      }
      dfs(child, notVisit, trees, visited, type);
    }
  }

  for (let i = 0; i < wires.length; i++) {
    const trees = {};

    for (let j = 1; j <= n; j++) {
      trees[j] = [];
    }

    for (let j = 0; j < wires.length; j++) {
      if (i === j) {
        continue;
      }

      const [a, b] = wires[j];

      trees[a].push(b);
      trees[b].push(a);
    }

    const [a, b] = wires[i];
    const visited = Array(n + 1).fill(false);

    A = 0;
    B = 0;

    dfs(a, b, trees, visited.slice(), "A");
    dfs(b, a, trees, visited.slice(), "B");

    answer = Math.min(answer, Math.abs(A - B));
  }
  return answer;
}
