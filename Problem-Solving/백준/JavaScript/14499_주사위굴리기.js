(function main() {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ]; // 동, 서, 북, 남
  const dice = [0, 0, 0, 0, 0, 0]; // 0: 윗면 기록, 5: 아랫면 기록
  const [N, M, x, y, _] = input[0].split(' ').map(Number);
  const map = [];

  for (let n = 1; n <= N; n++) {
    map.push(input[n].split(' ').map(Number));
  }

  const commands = input[N + 1].split(' ').map(Number);
  const answer = [];
  let currN = x,
    currM = y;

  commands.forEach(command => {
    const [n, m] = directions[command - 1];
    const nextN = currN + n;
    const nextM = currM + m;

    if (nextN < 0 || nextN >= N || nextM < 0 || nextM >= M) {
      return;
    }

    moveByDirection(command - 1, dice);

    if (map[nextN][nextM] !== 0) {
      dice[5] = map[nextN][nextM];
      map[nextN][nextM] = 0;
    } else {
      map[nextN][nextM] = dice[5];
    }

    [currN, currM] = [nextN, nextM];
    answer.push(dice[0]);
  });

  console.log(answer.join('\n'));
})();

function moveByDirection(direction, dice) {
  const frontNumber = dice[0];
  switch (direction) {
    case 0: // 동
      dice[0] = dice[3];
      dice[3] = dice[5];
      dice[5] = dice[2];
      dice[2] = frontNumber;
      break;
    case 1: // 서
      dice[0] = dice[2];
      dice[2] = dice[5];
      dice[5] = dice[3];
      dice[3] = frontNumber;
      break;
    case 2: // 북
      dice[0] = dice[4];
      dice[4] = dice[5];
      dice[5] = dice[1];
      dice[1] = frontNumber;
      break;
    case 3: // 남
      dice[0] = dice[1];
      dice[1] = dice[5];
      dice[5] = dice[4];
      dice[4] = frontNumber;
      break;
    default:
      break;
  }
}
