function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  function findIdx(str) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (maps[i][j] === str) {
          return [i, j];
        }
      }
    }
  }

  function bfs(startStr, endStr) {
    const queue = [];
    let idx = 0;
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    const visited = Array.from({ length: N }, () => Array.from({ length: M }));
    const [startI, startJ] = findIdx(startStr);
    queue.push([startI, startJ, 0]);
    visited[startI][startJ] = true;

    while (queue.length - idx !== 0) {
      const [currI, currJ, len] = queue[idx++];

      if (maps[currI][currJ] === endStr) {
        return len;
      }

      for (let d = 0; d < 4; d++) {
        const nextI = currI + di[d];
        const nextJ = currJ + dj[d];

        if (nextI < 0 || nextI >= N || nextJ < 0 || nextJ >= M) {
          continue;
        }
        if (maps[nextI][nextJ] === 'X') {
          continue;
        }
        if (visited[nextI][nextJ]) {
          continue;
        }

        queue.push([nextI, nextJ, len + 1]);
        visited[nextI][nextJ] = true;
      }
    }
    return 0;
  }

  const startToLever = bfs('S', 'L');

  if (startToLever === 0) {
    return -1;
  }

  const leverToExit = bfs('L', 'E');

  if (leverToExit === 0) {
    return -1;
  }

  return startToLever + leverToExit;
}
