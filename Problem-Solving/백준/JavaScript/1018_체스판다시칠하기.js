const main = (function () {
  const fs = require('fs');
  const [NM, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M] = NM.split(' ').map(Number);
  const map = [];

  for (let i = 0; i < N; i++) {
    const temp = input[i].trim().split('');
    map.push(temp);
  }

  const line = [
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ];

  const chessOne = [];
  const chessTwo = [];

  for (let i = 0; i < 8; i++) {
    chessOne.push(line[i % 2]);
    chessTwo.push(line[((i % 2) + 1) % 2]);
  }

  let answer = 64;

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let rePaintOne = 0;
      let rePaintTwo = 0;
      let indexI = 0;
      let indexJ = 0;

      for (let k = i; k < i + 8; k++) {
        indexJ = 0;
        for (let l = j; l < j + 8; l++) {
          if (map[k][l] !== chessOne[indexI][indexJ]) {
            rePaintOne++;
          }
          if (map[k][l] !== chessTwo[indexI][indexJ]) {
            rePaintTwo++;
          }
          indexJ++;
        }
        indexI++;
      }

      const smallerCount = Math.min(rePaintOne, rePaintTwo);
      answer = Math.min(answer, smallerCount);
    }
  }

  console.log(answer);
})();
