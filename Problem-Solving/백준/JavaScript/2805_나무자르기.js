const binarySearch = (trees, N, M) => {
  let left = 0;
  let right = 2000000000;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let temp = 0;

    for (let n = 0; n < N; n++) {
      const current = trees[n] - middle;

      if (current > 0) {
        temp += current;
      }
    }

    if (temp >= M) {
      //톱날을 더 올려본다.
      left = middle + 1;
    } else {
      //더 작게 잘라본다.
      right = middle - 1;
    }
  }

  return right;
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const [N, M] = input[0].trim().split(' ').map(Number);
  const trees = input[1].trim().split(' ').map(Number);

  console.log(binarySearch(trees, N, M));
})();
