const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const N = +input[0].trim();

  const answer = [];
  const map = new Map();

  let sum = 0;
  const sortingArr = [];
  let maxCount = 1;

  for (let i = 0; i < N; i++) {
    const current = +input[1 + i].trim();

    sum += current;
    sortingArr.push(current);

    if (map.has(current)) {
      const value = map.get(current) + 1;
      maxCount = Math.max(maxCount, value);
      map.set(current, value);
    } else {
      map.set(current, 1);
    }
  }

  sortingArr.sort((a, b) => a - b);

  answer.push(Math.round(sum / N));
  answer.push(sortingArr[Math.floor(N / 2)]);

  const modeArr = [];

  for (let [key, value] of map) {
    if (value === maxCount) {
      modeArr.push(key);
    }
  }

  modeArr.sort((a, b) => a - b);

  if (modeArr.length === 1) {
    answer.push(modeArr[0]);
  } else {
    answer.push(modeArr[1]);
  }

  answer.push(sortingArr[N - 1] - sortingArr[0]);

  console.log(answer.join('\n'));
})();
