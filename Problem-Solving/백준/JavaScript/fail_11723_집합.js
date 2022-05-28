//22.05.28기준 node.js로 맞은 사람이 한명도 없는 문제였다.
//메모리 초과가 다 떠버려서 현재까지는 해결을 못하는 것 같다.

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const N = +input[0].trim();
  const answer = [];
  const set = new Set();

  for (let n = 0; n < N; n++) {
    const [command, number] = input[1 + n].trim().split(' ');
    switch (command) {
      case 'add':
        set.add(+number);
        break;
      case 'remove':
        set.delete(+number);
        break;
      case 'check':
        if (set.has(+number)) {
          answer.push(1);
        } else {
          answer.push(0);
        }
        break;
      case 'toggle':
        if (set.has(+number)) {
          set.delete(+number);
        } else {
          set.add(+number);
        }
        break;
      case 'all':
        for (let i = 1; i < 21; i++) {
          set.add(i);
        }
        break;
      case 'empty':
        set.clear();
        break;
    }
  }

  console.log(answer.join('\n'));
})();
