const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M, K] = input[0].trim().split(" ").map(Number);
  const direction = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  const newMaps = () => {
    return Array.from({ length: N }, () => Array.from({ length: N }, () => []));
  };

  let fireballs = newMaps();

  for (let i = 0; i < M; i++) {
    const [r, c, m, s, d] = input[1 + i].trim().split(" ").map(Number);
    fireballs[r - 1][c - 1].push([m, s, d]);
  }

  const getM = (sum) => {
    return Math.floor(sum / 5);
  };

  const getS = (sum, count) => {
    return Math.floor(sum / count);
  };

  const validateType = (direction) => {
    if (direction % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };

  const moveFireballs = (fireballs) => {
    const newFireballs = newMaps();

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        for (const [m, s, d] of fireballs[r][c]) {
          const [sumR, sumC] = [direction[d][0] * (s % N), direction[d][1] * (s % N)];

          let moveR = r + sumR;
          let moveC = c + sumC;

          if (moveR < 0) {
            moveR += N;
          } else {
            moveR %= N;
          }

          if (moveC < 0) {
            moveC += N;
          } else {
            moveC %= N;
          }

          newFireballs[moveR][moveC].push([m, s, d]);
        }
      }
    }

    return newFireballs;
  };

  const combineFireballs = (fireballs) => {
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const getFireballs = fireballs[r][c];

        if (getFireballs.length < 2) {
          continue;
        }

        fireballs[r][c] = [];

        let sumM = 0;
        let sumS = 0;
        let flag = 0;
        let type = "default";

        for (const [m, s, d] of getFireballs) {
          sumM += m;
          sumS += s;
          flag = validateType(d);

          if (type === "noType") {
            continue;
          }

          if (type === "default") {
            type = flag;
          } else {
            if (type !== flag) {
              type = "noType";
            }
          }
        }

        const M = getM(sumM);
        const S = getS(sumS, getFireballs.length);

        if (M === 0) {
          continue;
        }

        if (type === "noType") {
          for (let i = 0; i < 8; i++) {
            if (i % 2 !== 0) {
              fireballs[r][c].push([M, S, i]);
            }
          }
        } else {
          for (let i = 0; i < 8; i++) {
            if (i % 2 === 0) {
              fireballs[r][c].push([M, S, i]);
            }
          }
        }
      }
    }
  };

  const sumFireballlM = (fireballs) => {
    let sum = 0;

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        for (const [m, s, d] of fireballs[r][c]) {
          sum += m;
        }
      }
    }

    return sum;
  };

  for (let k = 0; k < K; k++) {
    const nextMap = moveFireballs(fireballs);
    combineFireballs(nextMap);
    fireballs = nextMap;
  }

  console.log(sumFireballlM(fireballs));
})();
