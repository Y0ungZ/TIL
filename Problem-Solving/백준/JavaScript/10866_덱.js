const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const N = +input[0].trim();

  const frontDeque = [];
  const backDeque = [];
  const answer = [];

  for (let n = 0; n < N; n++) {
    const [currentInput, currentNum] = input[1 + n].trim().split(' ');

    switch (currentInput) {
      case 'push_front':
        frontDeque.push(currentNum);
        break;
      case 'push_back':
        backDeque.push(currentNum);
        break;
      case 'pop_front':
        if (frontDeque.length) {
          answer.push(frontDeque.pop());
        } else {
          if (backDeque.length) {
            answer.push(backDeque.shift());
          } else {
            answer.push(-1);
          }
        }
        break;
      case 'pop_back':
        if (backDeque.length) {
          answer.push(backDeque.pop());
        } else {
          if (frontDeque.length) {
            answer.push(frontDeque.shift());
          } else {
            answer.push(-1);
          }
        }
        break;
      case 'size':
        answer.push(frontDeque.length + backDeque.length);
        break;
      case 'empty':
        if (!frontDeque.length && !backDeque.length) {
          answer.push(1);
        } else {
          answer.push(0);
        }
        break;
      case 'front':
        if (frontDeque.length) {
          answer.push(frontDeque[frontDeque.length - 1]);
        } else {
          if (backDeque.length) {
            answer.push(backDeque[0]);
          } else {
            answer.push(-1);
          }
        }
        break;
      case 'back':
        if (backDeque.length) {
          answer.push(backDeque[backDeque.length - 1]);
        } else {
          if (frontDeque.length) {
            answer.push(frontDeque[0]);
          } else {
            answer.push(-1);
          }
        }
        break;
      default:
        break;
    }
  }

  console.log(answer.join('\n'));
})();
