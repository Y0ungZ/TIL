const thisColoris = (arr, cnt, lr, rr, lc, rc) => {
  let tempWhite = 0;
  let tempBlue = 0;

  for (let i = lr; i < rr; i++) {
    for (let j = lc; j < rc; j++) {
      if (arr[i][j]) {
        tempBlue++;
      } else {
        tempWhite++;
      }
    }
  }

  if (tempBlue === cnt) {
    return 'BLUE';
  } else if (tempWhite === cnt) {
    return 'WHITE';
  } else {
    return 'MIX';
  }
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const N = +input[0].trim();
  const paper = [];

  for (let n = 1; n <= N; n++) {
    paper.push(input[n].trim().split(' ').map(Number));
  }

  let whiteSum = 0;
  let blueSum = 0;

  const init = thisColoris(paper, N * N, 0, N, 0, N);

  const cuttingPaper = (lr, rr, lc, rc, paper) => {
    const N = rr - lr;
    const current = thisColoris(paper, N * N, lr, rr, lc, rc);
    if (current === 'MIX') {
      const divide = Math.floor(N / 2);
      cuttingPaper(lr + divide, rr, lc, lc + divide, paper);
      cuttingPaper(lr, lr + divide, lc, lc + divide, paper);
      cuttingPaper(lr, lr + divide, lc + divide, rc, paper);
      cuttingPaper(lr + divide, rr, lc + divide, rc, paper);
    } else if (current === 'WHITE') {
      whiteSum++;
    } else {
      blueSum++;
    }
    return;
  };

  if (init === 'MIX') {
    const cut = Math.floor(N / 2);
    cuttingPaper(0, cut, 0, cut, paper);
    cuttingPaper(cut, N, 0, cut, paper);
    cuttingPaper(0, cut, cut, N, paper);
    cuttingPaper(cut, N, cut, N, paper);
  } else if (init === 'WHITE') {
    whiteSum++;
  } else {
    blueSum++;
  }

  console.log(`${whiteSum}\n${blueSum}`);
})();
