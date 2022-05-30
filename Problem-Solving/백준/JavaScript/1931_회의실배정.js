const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const N = +input[0].trim();
  const meetingRoom = [];

  for (let n = 0; n < N; n++) {
    meetingRoom.push(input[1 + n].trim().split(' ').map(Number));
  }

  meetingRoom.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let answer = 0;
  let currentTime = 0;
  for (let n = 0; n < N; n++) {
    const [start, end] = meetingRoom[n];

    if (start >= currentTime) {
      answer += 1;
      currentTime = end;
    }
  }

  console.log(answer);
})();
