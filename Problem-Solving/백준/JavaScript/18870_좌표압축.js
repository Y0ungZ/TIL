const findCompressionIdx = (number, arr) => {
  let left = 0;
  let right = arr.length - 1;

  let idx = 0;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === number) {
      idx = middle;
      break;
    } else if (arr[middle] > number) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return idx;
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const N = +input[0].trim();
  const coordinate = input[1].trim().split(' ').map(Number);
  const sortingSetArr = [...new Set(coordinate)].sort((a, b) => a - b);

  const answer = [];

  for (let n = 0; n < N; n++) {
    answer.push(findCompressionIdx(coordinate[n], sortingSetArr));
  }

  console.log(answer.join(' '));
})();
