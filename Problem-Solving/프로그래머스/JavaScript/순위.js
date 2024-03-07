function solution(n, results) {
  let answer = 0;
  const winArr = Array.from({ length: n }, () => Array(n).fill(0));

  results.forEach(result => {
    const [win, lose] = result;
    winArr[win - 1][lose - 1] = 1;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) {
          continue;
        }

        if (winArr[i][k] && winArr[k][j]) {
          winArr[i][j] = 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      count += winArr[i][j];
      count += winArr[j][i];
    }
    if (count === n - 1) {
      answer++;
    }
  }

  return answer;
}
