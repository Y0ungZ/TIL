function solution(board) {
  const INVALID_NUMBER = -1;
  const R = board.length;
  const C = board[0].length;

  const sliding = (start, direction) => {
    let nextR = start[0];
    let nextC = start[1];

    while (true) {
      const moveR = nextR + direction[0];
      const moveC = nextC + direction[1];

      if (moveR < 0 || moveR >= R || moveC < 0 || moveC >= C) {
        break;
      }

      if (board[moveR][moveC] === 'D') {
        break;
      }

      nextR = moveR;
      nextC = moveC;
    }
    return [nextR, nextC];
  };

  const bfs = ([r, c]) => {
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    const queue = [];
    queue.push([r, c]);
    let idx = 0;
    const visited = Array.from({ length: R }, () => Array(C).fill(false));
    visited[r][c] = true;
    let depth = 0;

    while (queue.length - idx !== 0) {
      const size = queue.length - idx;
      depth++;
      const startIdx = idx;

      for (let s = idx; s < startIdx + size; s++) {
        const [currR, currC] = queue[idx++];

        for (let d = 0; d < 4; d++) {
          const [nextR, nextC] = sliding([currR, currC], directions[d]);
          if (visited[nextR][nextC]) {
            continue;
          }
          if (board[nextR][nextC] === 'G') {
            return depth;
          }
          queue.push([nextR, nextC]);
          visited[nextR][nextC] = true;
        }
      }
    }
    return INVALID_NUMBER;
  };

  const start = [0, 0];

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c] === 'R') {
        start[0] = r;
        start[1] = c;
      }
    }
    if (start[0] !== 0 || start[1] !== 0) {
      break;
    }
  }

  return bfs(start);
}
