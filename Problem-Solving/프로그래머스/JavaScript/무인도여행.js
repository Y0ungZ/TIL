function solution(maps) {
  const splitMaps = maps.map(el => el.split(''));
  const answer = [];
  const I = maps.length;
  const J = maps[0].length;
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];

  const bfs = (i, j) => {
    let sum = Number(splitMaps[i][j]);
    splitMaps[i][j] = 'X';
    const queue = [[i, j]];
    let idx = 0;

    while (queue.length - idx > 0) {
      const currI = queue[idx][0];
      const currJ = queue[idx][1];

      for (let d = 0; d < 4; d++) {
        const nextI = currI + di[d];
        const nextJ = currJ + dj[d];

        if (nextI < 0 || nextI >= I || nextJ < 0 || nextJ >= J) {
          continue;
        }

        if (splitMaps[nextI][nextJ] === 'X') {
          continue;
        }

        queue.push([nextI, nextJ]);
        sum += Number(splitMaps[nextI][nextJ]);
        splitMaps[nextI][nextJ] = 'X';
      }
      idx++;
    }

    return sum;
  };

  for (let i = 0; i < I; i++) {
    for (let j = 0; j < J; j++) {
      if (splitMaps[i][j] !== 'X') {
        answer.push(bfs(i, j));
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
