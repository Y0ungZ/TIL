function solution(info, edges) {
  const answer = [];
  const visited = Array(info.length).fill(false);
  visited[0] = true;

  const dfs = (sheepCount, wolfCount) => {
    if (sheepCount > wolfCount) {
      answer.push(sheepCount);
    } else {
      return;
    }

    edges.forEach(([a, b]) => {
      if (visited[a] && !visited[b]) {
        visited[b] = true;
        if (!info[b]) {
          dfs(sheepCount + 1, wolfCount);
        }
        if (info[b]) {
          dfs(sheepCount, wolfCount + 1);
        }
        visited[b] = false;
      }
    });
  };

  dfs(1, 0);

  return Math.max(...answer);
}
