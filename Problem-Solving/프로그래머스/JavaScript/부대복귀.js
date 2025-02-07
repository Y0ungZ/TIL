function solution(n, roads, sources, destination) {
  const distance = Array(n).fill(-1);
  const adjList = {};

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  roads.forEach(road => {
    const [a, b] = road;
    adjList[a - 1].push(b - 1);
    adjList[b - 1].push(a - 1);
  }); // init end

  const bfs = destination => {
    // 자기 자신으로 가는 길 : 0
    distance[destination] = 0;

    const queue = [[destination, 0]];
    const visited = Array(n).fill(false);
    visited[destination] = true;
    let idx = 0;

    while (queue.length - idx !== 0) {
      const [currentRegion, currentDistance] = queue[idx++];

      const nextRegion = adjList[currentRegion];
      for (let i = 0; i < nextRegion.length; i++) {
        if (visited[nextRegion[i]]) {
          continue;
        }

        visited[nextRegion[i]] = true;
        queue.push([nextRegion[i], currentDistance + 1]);
        distance[nextRegion[i]] = currentDistance + 1;
      }
    }
  };

  bfs(destination - 1);
  return sources.map(source => distance[source - 1]);
}
