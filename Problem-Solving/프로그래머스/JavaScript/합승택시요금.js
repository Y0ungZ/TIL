function solution(n, s, a, b, fares) {
  let answer = Infinity;
  const dist = Array.from(Array(n), () => Array(n).fill(Infinity));

  fares.forEach((el) => {
    const [c, d, f] = el;
    dist[c - 1][d - 1] = f;
    dist[d - 1][c - 1] = f;
  }); //연결 정보 저장

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let k = 0; k < n; k++) {
    //경유지
    for (let i = 0; i < n; i++) {
      //출발지
      for (let j = 0; j < n; j++) {
        //도착지
        if (i === j) {
          continue;
        }
        if (dist[i][k] === Infinity || dist[k][j] === Infinity) {
          continue;
        }
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    answer = Math.min(answer, dist[s - 1][i] + dist[i][a - 1] + dist[i][b - 1]);
  }

  return answer;
}
