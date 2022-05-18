const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const K = +input[0].trim();

  let answer = [];

  for (let k = 0; k < K; k++) {
    const current = +input[1 + k].trim();
    if (current === 0) {
      answer.pop();
    } else {
      answer.push(current);
    }
  }

  if (answer.length) {
    console.log(
      answer.reduce((prev, curr) => {
        return prev + curr;
      })
    );
  } else {
    console.log(0);
  }
})();
