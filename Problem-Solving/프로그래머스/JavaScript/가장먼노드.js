function solution(n, edge) {
  const adjList = {};

  // init - start
  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
  }

  edge.forEach(([a, b]) => {
    adjList[a].push(b);
    adjList[b].push(a);
  });
  // init - end

  const bfs = start => {
    const queue = [];
    queue.push(start);
    let idx = 0;
    const visited = Array(n).fill(false);
    visited[start] = true;
    let answer = 0;

    while (queue.length - idx !== 0) {
      const size = queue.length - idx;
      answer = size;
      const startIdx = idx;

      for (let s = idx; s < startIdx + size; s++) {
        const currentNode = queue[idx++];
        const currAdjList = adjList[currentNode];

        for (const node of currAdjList) {
          if (visited[node]) {
            continue;
          }
          queue.push(node);
          visited[node] = true;
        }
      }
    }

    return answer;
  };

  return bfs('1');
}
