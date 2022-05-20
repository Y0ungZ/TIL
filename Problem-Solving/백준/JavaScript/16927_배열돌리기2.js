const rotate = (arr, LR, RR, LC, RC) => {
  const tempLeft = arr[RR][LC];

  for (let i = RR; i > LR; i--) {
    arr[i][LC] = arr[i - 1][LC];
  }

  const tempBottom = arr[RR][RC];

  for (let j = RC; j > LC; j--) {
    arr[RR][j] = arr[RR][j - 1];
  }
  arr[RR][LC + 1] = tempLeft;

  const tempRight = arr[LR][RC];

  for (let i = LR; i < RR; i++) {
    arr[i][RC] = arr[i + 1][RC];
  }

  arr[RR - 1][RC] = tempBottom;

  for (let j = LC; j < RC; j++) {
    arr[LR][j] = arr[LR][j + 1];
  }

  arr[LR][RC - 1] = tempRight;
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const [N, M, R] = input[0].trim().split(' ').map(Number);
  const arr = [];

  for (let n = 0; n < N; n++) {
    const currentInput = input[1 + n].trim().split(' ').map(Number);
    arr.push(currentInput);
  }

  let LR = 0,
    LC = 0;
  let RR = N - 1,
    RC = M - 1;

  const COUNT = Math.floor(Math.min(N, M) / 2);

  for (let i = 0; i < COUNT; i++) {
    const decreaseN = RR - LR + 1;
    const decreaseM = RC - LC + 1;
    const MOD = decreaseN * 2 + decreaseM * 2 - 4;
    const realR = R % MOD;

    for (let r = 0; r < realR; r++) {
      rotate(arr, LR, RR, LC, RC);
    }
    LR++;
    LC++;
    RR--;
    RC--;
  }

  let answer = '';
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      answer += `${arr[i][j]} `;
    }
    answer += '\n';
  }

  console.log(answer);
})();
