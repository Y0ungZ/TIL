const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

  const sum = input.map((el) => Math.pow(el, 2)).reduce((prev, curr) => prev + curr);

  console.log(sum % 10);
})();
