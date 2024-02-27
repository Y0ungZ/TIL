function solution(arr) {
  const N = arr.length;
  const answer = [0, 0];

  const isAllSameNumber = (startR, startC, n) => {
    const first = arr[startR][startC];
    for (let r = startR; r < startR + n; r++) {
      for (let c = startC; c < startC + n; c++) {
        if (arr[r][c] !== first) {
          return false;
        }
      }
    }
    return true;
  };

  const quadCompression = (startR, startC, n) => {
    if (n === 0) {
      return;
    }
    if (isAllSameNumber(startR, startC, n)) {
      answer[arr[startR][startC]] += 1;
      return;
    }

    quadCompression(startR, startC, n / 2);
    quadCompression(startR, startC + n / 2, n / 2);
    quadCompression(startR + n / 2, startC, n / 2);
    quadCompression(startR + n / 2, startC + n / 2, n / 2);
  };

  quadCompression(0, 0, N);
  return answer;
}
