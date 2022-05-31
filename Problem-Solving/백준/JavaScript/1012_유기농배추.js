const bfs = (map, visit, i, j, M, N) => {
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];
  const queue = [];
  let index = 0;

  queue.push([i, j]);
  visit[i][j] = true;

  while (true) {
    const size = queue.length - index;

    if (!size) {
      break;
    }

    for (let s = 0; s < size; s++) {
      const [X, Y] = queue[index++];

      for (let d = 0; d < 4; d++) {
        const mX = X + di[d];
        const mY = Y + dj[d];

        if (mX < 0 || mX >= M || mY < 0 || mY >= N) {
          continue;
        }
        if (visit[mX][mY]) {
          continue;
        }

        if (!map[mX][mY]) {
          continue;
        }

        visit[mX][mY] = true;
        queue.push([mX, mY]);
      }
    }
  }
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const T = +input[0].trim();
  let index = 1;

  for (let t = 0; t < T; t++) {
    const [M, N, K] = input[index++].trim().split(' ').map(Number);
    const map = Array.from(Array(M), () => Array(N).fill(0));
    const visit = Array.from(Array(M), () => Array(N).fill(false));

    for (let k = 0; k < K; k++) {
      const [X, Y] = input[index++].trim().split(' ').map(Number);
      map[X][Y] = 1;
    }
    let result = 0;
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (map[i][j] === 1 && !visit[i][j]) {
          result++;
          bfs(map, visit, i, j, M, N);
        }
      }
    }

    console.log(result);
  }
})();
