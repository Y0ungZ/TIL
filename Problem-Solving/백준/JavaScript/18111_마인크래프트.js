const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const [N, M, B] = input[0].trim().split(' ').map(Number);
  const map = [];

  for (let n = 0; n < N; n++) {
    map.push(input[1 + n].trim().split(' ').map(Number));
  }

  let result = Infinity;
  let lessHeight = 257;

  for (let h = 0; h < 257; h++) {
    let inven = B;
    let time = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        const current = h - map[i][j];
        if (current < 0) {
          //제거하여 인벤토리에 넣음
          inven += current * -1;
          time += current * -1 * 2;
        } else {
          //인벤토리에서 꺼내 쌓음
          inven -= current;
          time += current;
        }
      }
    }

    if (inven >= 0) {
      if (result >= time) {
        result = time;
        lessHeight = h;
      }
    }
  }

  console.log(`${result} ${lessHeight}`);
})();
