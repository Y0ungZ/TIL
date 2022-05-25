const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const [K, N] = input[0].trim().split(' ').map(Number);
  const cables = [];

  for (let k = 0; k < K; k++) {
    cables.push(+input[1 + k].trim());
  }

  let low = 1;
  let high = Math.pow(2, 31) - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let cutCable = 0;

    for (let k = 0; k < K; k++) {
      cutCable += Math.floor(cables[k] / middle);
    }

    if (cutCable >= N) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  console.log(high);
})();
