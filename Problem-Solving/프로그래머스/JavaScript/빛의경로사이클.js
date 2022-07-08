function solution(grid) {
  let answer = [];
  const visit = [];
  const N = grid.length;
  const M = grid[0].length;

  const di = [-1, 0, 1, 0];
  const dj = [0, -1, 0, 1];

  for (let i = 0; i < N; i++) {
    visit.push([]);
    for (let j = 0; j < M; j++) {
      visit[i].push(Array(4).fill(0)); //위:0,왼:1,아래:2,오:3
    }
  }

  function turnLeft(d) {
    return (d + 1) % 4;
  }

  function turnRight(d) {
    return (d + 3) % 4;
  }

  function goNext(i, j, d) {
    let mi = i + di[d];
    let mj = j + dj[d];

    if (mi < 0) {
      mi = N - 1;
    } else {
      mi %= N;
    }
    if (mj < 0) {
      mj = M - 1;
    } else {
      mj %= M;
    }
    return [mi, mj];
  }

  function lightning(i, j, d) {
    let len = 0;

    while (true) {
      if (visit[i][j][d]) {
        break;
      }

      visit[i][j][d] = true;
      len++;

      if (grid[i][j] === "S") {
        [i, j] = goNext(i, j, d);
      } else if (grid[i][j] === "L") {
        d = turnLeft(d);
        [i, j] = goNext(i, j, d);
      } else {
        d = turnRight(d);
        [i, j] = goNext(i, j, d);
      }
    }

    return len;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let d = 0; d < 4; d++) {
        if (!visit[i][j][d]) {
          answer.push(lightning(i, j, d));
        }
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
