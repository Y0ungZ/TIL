const peek = (stack) => {
  return stack[stack.length - 1];
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const answer = [];
  const N = input.length - 1;

  for (let n = 0; n < N; n++) {
    const braketsStack = []; // 괄호 스택
    const current = input[n];
    const M = current.length;

    for (let m = 0; m < M; m++) {
      switch (current[m]) {
        case '(':
          braketsStack.push('(');
          break;
        case ')':
          if (peek(braketsStack) === '(') {
            braketsStack.pop();
          } else {
            braketsStack.push('*');
          }
          break;
        case '[':
          braketsStack.push('[');
          break;
        case ']':
          if (peek(braketsStack) === '[') {
            braketsStack.pop();
          } else {
            braketsStack.push('*');
          }
          break;
        default:
          break;
      }
    }

    if (braketsStack.length) {
      answer.push('no');
    } else {
      answer.push('yes');
    }
  }
  console.log(answer.join('\n'));
})();
