const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const T = +input[0].trim();
  const answer = [];

  for (let t = 0; t < T; t++) {
    const current = input[1 + t].trim();
    const stack = [];

    if (current[0] === ')') {
      answer.push('NO');
      continue;
    }

    for (let i = 0; i < current.length; i++) {
      if (current[i] === '(') {
        stack.push('(');
      } else {
        if (stack.length) {
          if (stack[stack.length - 1] === '(') {
            stack.pop();
            continue;
          }
        }
        stack.push(')');
      }
    }

    if (stack.length) {
      answer.push('NO');
    } else {
      answer.push('YES');
    }
  }
  console.log(answer.join('\n'));
})();
