const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const L = +input[0].trim();
  const inputString = input[1].trim();
  const M = BigInt(1234567891);

  let answer = BigInt(0);
  let pow = BigInt(1);

  for (let l = 0; l < L; l++) {
    const ascii = inputString[l].charCodeAt(0) - 96;
    answer += BigInt(ascii) * pow;
    pow *= 31n;
  }

  console.log(Number(answer % M));
})();
