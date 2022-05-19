const isSame = (A, B) => {
  const N = A.length;
  const M = A[0].length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] !== B[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const [N, M] = input[0].trim().split(' ').map(Number);

  const A = [];
  const B = [];

  for (let n = 1; n <= N; n++) {
    A.push(input[n].trim().split('').map(Number));
  }

  for (let n = N + 1; n <= 2 * N; n++) {
    B.push(input[n].trim().split('').map(Number));
  }

  let count = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (A[i][j] !== B[i][j]) {
        count++;
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            A[i + k][j + l] = +!A[i + k][j + l];
          }
        }
      }
    }
  }
  if (isSame(A, B)) {
    console.log(count);
  } else {
    console.log(-1);
  }
})();
