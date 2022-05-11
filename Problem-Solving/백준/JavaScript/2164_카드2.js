const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = +fs.readFileSync(filePath).toString().trim();

  const answer = [];

  for (let i = 1; i <= input; i++) {
    answer.push(i);
  }

  let index = 0;

  while (true) {
    const size = answer.length - index;

    if (size === 1) {
      break;
    }

    index++;
    answer.push(answer[index++]);
  }

  console.log(answer.pop());
})();
