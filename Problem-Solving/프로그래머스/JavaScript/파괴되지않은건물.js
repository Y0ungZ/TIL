function solution(board, skill) {
  let answer = 0;
  const N = board.length;
  const M = board[0].length;

  const prefixSumArr = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  for (let s = 0; s < skill.length; s++) {
    const [type, r1, c1, r2, c2, degree] = skill[s];
    let origin = degree;
    let reverse;
    if (type === 1) {
      origin *= -1;
    }
    reverse = origin * -1;
    prefixSumArr[r1][c1] += origin;
    prefixSumArr[r1][c2 + 1] += reverse;
    prefixSumArr[r2 + 1][c1] += reverse;
    prefixSumArr[r2 + 1][c2 + 1] += origin;
  }

  for (let n = 0; n <= N; n++) {
    for (let m = 1; m < M; m++) {
      prefixSumArr[n][m] += prefixSumArr[n][m - 1];
    }
  }

  for (let m = 0; m <= M; m++) {
    for (let n = 1; n < N; n++) {
      prefixSumArr[n][m] += prefixSumArr[n - 1][m];
    }
  }

  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      board[n][m] += prefixSumArr[n][m];
      if (board[n][m] >= 1) {
        answer++;
      }
    }
  }

  return answer;
}
