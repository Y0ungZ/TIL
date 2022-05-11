const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const inputLen = input.length;
  const answer = [];
  for (let i = 0; i < inputLen - 1; i++) {
    const current = input[i].trim().split('');
    let start = 0;
    let end = current.length - 1;

    let flag = true;

    while (start <= end) {
      if (current[start] !== current[end]) {
        answer.push('no');
        flag = false;
        break;
      }
      start++;
      end--;
    }

    if (flag) {
      answer.push('yes');
    }
  }

  console.log(answer.join('\n'));
})();
