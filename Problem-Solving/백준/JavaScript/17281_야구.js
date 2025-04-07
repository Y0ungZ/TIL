// main
(() => {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const N = +input[0];
  let maxScore = 0;
  const CONFIG = Object.freeze({
    PLAYER_COUNT: 9,
    OUT_COUNT: 3,
    FIXED_HITTER: Object.freeze({
      PLAYER: 1,
      IDX: 3,
    }),
    HIT_RESULT: Object.freeze({
      OUT: 0,
      SINGLE: 1,
      DOUBLE: 2,
      TRIPLE: 3,
      HOMERUN: 4,
    }),
  });

  const innings = [];
  const orders = Array(CONFIG.PLAYER_COUNT)
    .fill(0)
    .map((_, idx) => idx + 1);

  for (let n = 1; n <= N; n++) {
    innings.push(input[n].trim().split(' ').map(Number));
  }

  const nextPermutation = orders => {
    let i = orders.length - 1;

    while (i > 0 && orders[i - 1] >= orders[i]) {
      --i;
    }

    if (i === 0) {
      return false;
    }

    let j = orders.length - 1;
    while (orders[i - 1] >= orders[j]) {
      --j;
    }

    [orders[i - 1], orders[j]] = [orders[j], orders[i - 1]];

    let k = orders.length - 1;
    while (i < k) {
      const IDX_I = i++;
      const IDX_K = k--;
      [orders[IDX_I], orders[IDX_K]] = [orders[IDX_K], orders[IDX_I]];
    }

    return true;
  };

  do {
    // 1번 선수가 4번 타자일때만 진행
    if (orders[CONFIG.FIXED_HITTER.IDX] === CONFIG.FIXED_HITTER.PLAYER) {
      let score = 0;
      let playerIdx = 0;
      innings.forEach(inning => {
        let outCount = 0;
        let firstBase = 0;
        let secondBase = 0;
        let thirdBase = 0;

        while (outCount < CONFIG.OUT_COUNT) {
          const result = inning[orders[playerIdx] - 1];
          switch (result) {
            case CONFIG.HIT_RESULT.OUT:
              outCount += 1;
              break;
            case CONFIG.HIT_RESULT.SINGLE:
              score += thirdBase;
              thirdBase = secondBase;
              secondBase = firstBase;
              firstBase = 1;
              break;
            case CONFIG.HIT_RESULT.DOUBLE:
              score += secondBase + thirdBase;
              thirdBase = firstBase;
              secondBase = 1;
              firstBase = 0;
              break;
            case CONFIG.HIT_RESULT.TRIPLE:
              score += firstBase + secondBase + thirdBase;
              thirdBase = 1;
              secondBase = 0;
              firstBase = 0;
              break;
            case CONFIG.HIT_RESULT.HOMERUN:
              score += firstBase + secondBase + thirdBase + 1;
              firstBase = 0;
              secondBase = 0;
              thirdBase = 0;
              break;
          }
          playerIdx = (playerIdx + 1) % CONFIG.PLAYER_COUNT;
        }
      });
      maxScore = Math.max(maxScore, score);
    }
  } while (nextPermutation(orders));

  console.log(maxScore);
})();
