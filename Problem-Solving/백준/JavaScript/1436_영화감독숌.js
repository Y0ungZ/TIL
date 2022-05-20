const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const N = +fs.readFileSync(filePath).toString().trim();

  let answer = 1;
  let cnt = 0;

  while (cnt !== N) {
    answer++;
    let temp = answer;

    while (temp !== 0) {
      if (temp % 1000 === 666) {
        cnt++;
        break;
      }
      temp = Math.floor(temp / 10);
    }
  }

  console.log(answer);
})();
