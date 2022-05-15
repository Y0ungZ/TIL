const sPoleGears = (gearsInfo) => {
  let sum = 0;

  for (let i = 0; i < gearsInfo.length; i++) {
    if (gearsInfo[i][0] === '1') {
      sum += 1;
    }
  }
  return sum;
};

const clockWiseGear = (gear) => {
  return gear.slice(-1) + gear.slice(0, gear.length - 1);
};

const antiClockWiseGear = (gear) => {
  return gear.slice(1, gear.length) + gear.slice(0, 1);
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const T = +input[0].trim();
  const gears = [];

  for (let t = 0; t < T; t++) {
    const currentInput = input[1 + t].trim();
    gears.push(currentInput);
  }

  const K = +input[1 + T].trim();
  for (let k = 0; k < K; k++) {
    const [number, direction] = input[2 + T + k].trim().split(' ');
    let command;
    let before;
    switch (direction) {
      case '1':
        //시계방향
        command = 1;
        //왼쪽
        before = gears[number - 1];
        for (let i = number - 2; i >= 0; i--) {
          if (before[6] !== gears[i][2]) {
            if (command) {
              before = gears[i];
              gears[i] = antiClockWiseGear(gears[i]);
              command = 0;
            } else {
              before = gears[i];
              gears[i] = clockWiseGear(gears[i]);
              command = 1;
            }
          } else {
            break;
          }
        }
        //오른쪽
        command = 1;
        before = gears[number - 1];
        for (let i = number; i < T; i++) {
          if (before[2] !== gears[i][6]) {
            if (command) {
              before = gears[i];
              gears[i] = antiClockWiseGear(gears[i]);
              command = 0;
            } else {
              before = gears[i];
              gears[i] = clockWiseGear(gears[i]);
              command = 1;
            }
          } else {
            break;
          }
        }
        gears[number - 1] = clockWiseGear(gears[number - 1]);
        break;
      case '-1':
        //반시계방향
        command = 1;
        //왼쪽
        before = gears[number - 1];
        for (let i = number - 2; i >= 0; i--) {
          if (before[6] !== gears[i][2]) {
            if (command) {
              before = gears[i];
              gears[i] = clockWiseGear(gears[i]);
              command = 0;
            } else {
              before = gears[i];
              gears[i] = antiClockWiseGear(gears[i]);
              command = 1;
            }
          } else {
            break;
          }
        }
        //오른쪽
        command = 1;
        before = gears[number - 1];
        for (let i = number; i < T; i++) {
          if (before[2] !== gears[i][6]) {
            if (command) {
              before = gears[i];
              gears[i] = clockWiseGear(gears[i]);
              command = 0;
            } else {
              before = gears[i];
              gears[i] = antiClockWiseGear(gears[i]);
              command = 1;
            }
          } else {
            break;
          }
        }
        gears[number - 1] = antiClockWiseGear(gears[number - 1]);
        break;
      default:
        break;
    }
  }

  console.log(sPoleGears(gears));
})();
