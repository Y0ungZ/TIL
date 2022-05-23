const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const T = +input[0].trim();
  let index = 1;
  const answer = [];

  for (let t = 0; t < T; t++) {
    const [N, M] = input[index++].trim().split(' ').map(Number);
    const document = input[index++]
      .trim()
      .split(' ')
      .map((el, idx) => [idx, +el]);
    const importance = [...document].sort((a, b) => a[1] - b[1]);
    let order = 1;

    while (true) {
      if (document[0][1] < importance[importance.length - 1][1]) {
        document.push(document.shift());
      } else {
        const popElement = document.shift();
        if (popElement[0] === M) {
          answer.push(order);
          break;
        } else {
          importance.pop();
          order++;
        }
      }
    }
  }

  console.log(answer.join('\n'));
})();
