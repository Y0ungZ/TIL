const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
  const map = [];

  for (let n = 0; n < N; n++) {
    map.push(input[n].split(" ").map(Number));
  }

  let currentR = Math.floor(N / 2),
    currentC = Math.floor(N / 2);
  let currentMoveCount = 0;
  let switchCount = 0;
  let currentDirection = 0;
  let switchDirection = 1;

  let result = 0;

  const direction = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  const tornado = [
    {
      1: [
        [-1, 0],
        [1, 0],
      ],
      2: [
        [-2, -1],
        [2, -1],
      ],
      5: [
        [0, -3],
        [0, 0],
      ],
      7: [
        [-1, -1],
        [1, -1],
      ],
      10: [
        [-1, -2],
        [1, -2],
      ],
    },
    {
      1: [
        [0, 1],
        [0, -1],
      ],
      2: [
        [1, -2],
        [1, 2],
      ],
      5: [
        [3, 0],
        [0, 0],
      ],
      7: [
        [1, -1],
        [1, 1],
      ],
      10: [
        [2, -1],
        [2, 1],
      ],
    },
  ];

  const isIn = (r, c) => {
    if (r < 0 || r >= N || c < 0 || c >= N) {
      return false;
    }
    return true;
  };

  const calcSandAmount = (tornadoEffect, switchIdx, switchFlag, sand) => {
    if (sand === 0) {
      return;
    }

    let calcAlpha = sand;
    let alphaR = currentR + direction[currentDirection][0] * 2,
      alphaC = currentC + direction[currentDirection][1] * 2;

    for (const key in tornadoEffect) {
      const effect = tornadoEffect[key];
      for (let i = 0; i < effect.length; i++) {
        const wind = effect[i].slice();

        if (wind[0] === 0 && wind[1] === 0) {
          continue;
        }

        if (switchFlag && Number(key) !== 1) {
          wind[switchIdx] *= -1;
        }

        const windR = currentR + wind[0];
        const windC = currentC + wind[1];

        const calcSand = Math.floor((Number(key) / 100) * sand);

        if (isIn(windR, windC)) {
          map[windR][windC] += calcSand;
        } else {
          result += calcSand;
        }

        calcAlpha -= calcSand;
      }
    }

    if (isIn(alphaR, alphaC)) {
      map[alphaR][alphaC] += calcAlpha;
    } else {
      result += calcAlpha;
    }
  };

  const makeTornado = (directionIdx, sand) => {
    if (directionIdx % 2 === 0) {
      calcSandAmount(tornado[0], 1, directionIdx === 2, sand);
    } else {
      calcSandAmount(tornado[1], 0, directionIdx === 3, sand);
    }
  };

  while (!(currentR === 0 && currentC === 0)) {
    const yR = currentR + direction[currentDirection][0];
    const yC = currentC + direction[currentDirection][1];
    makeTornado(currentDirection, map[yR][yC]);
    map[yR][yC] = 0;
    currentR = yR;
    currentC = yC;

    currentMoveCount++;

    if (currentMoveCount === switchDirection) {
      switchCount++;
      currentDirection = (currentDirection + 1) % 4;
      currentMoveCount = 0;
    }

    if (switchCount === 2) {
      switchDirection += 1;
      switchCount = 0;
    }
  }

  console.log(result);
})();
