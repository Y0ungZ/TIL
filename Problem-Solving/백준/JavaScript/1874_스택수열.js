const stackPeek = (stack) => {
  return stack[stack.length - 1];
};
const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

  const N = input[0];
  const number = Array(N)
    .fill(0)
    .map((value, idx) => idx + 1);

  const answer = [];
  const stack = [];
  let idx = 0;
  let isMake = true;

  for (let n = 1; n <= N; n++) {
    const current = input[n];
    while (number[idx] <= current) {
      stack.push(number[idx++]);
      answer.push('+');
    }

    if (stack.length && stackPeek(stack) === current) {
      answer.push('-');
      stack.pop();
    } else {
      isMake = false;
      break;
    }
  }

  if (isMake) {
    console.log(answer.join('\n'));
  } else {
    console.log('NO');
  }
})();
