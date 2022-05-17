const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

  const circle = Array(N).fill(false);

  let order = 0;
  let count = 0;
  let removeIdx = K - 1;
  const answer = [];

  while (order < N) {
    count = 0;
    order++;
    circle[removeIdx] = true;
    answer.push(removeIdx + 1);

    while (count < K) {
      if (order >= N) {
        break;
      }
      removeIdx = (removeIdx + 1) % N;
      if (!circle[removeIdx]) {
        count++;
      }
    }
  }

  console.log(`<${answer.join(', ')}>`);
})();
