'use strict';

(function () {
  const fs = require('fs');

  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const T = +Number(input[0].trim());
  let index = 1;
  let result = '';

  for (let t = 0; t < T; t++) {
    const [N, M] = input[index++].trim().split(' ').map(Number);
    for (let m = 0; m < M; m++) {
      const [A, B] = input[index++].trim().split(' ').map(Number);
    }
    result += `${N - 1}\n`;
  }

  console.log(result);
})();
