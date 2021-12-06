const getIJ = (phone, number) => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (phone[i][j] === number) {
        return [i, j];
      }
    }
  }
};

const calcDis = (ci, cj, mi, mj) => {
  return Math.abs(ci - mi) + Math.abs(cj - mj);
};

const solution = (numbers, hand) => {
  let answer = '';
  let leftI = 3,
    leftJ = 0;
  let rightI = 3,
    rightJ = 2;

  let phone = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  for (let i = 0; i < numbers.length; i++) {
    let [ci, cj] = getIJ(phone, numbers[i]);
    let finger;

    if (/[147]/.test(numbers[i])) {
      finger = 'L';
      leftI = ci;
      leftJ = cj;
    } else if (/[369]/.test(numbers[i])) {
      finger = 'R';
      rightI = ci;
      rightJ = cj;
    } else {
      if (calcDis(ci, cj, leftI, leftJ) > calcDis(ci, cj, rightI, rightJ)) {
        finger = 'R';
        rightI = ci;
        rightJ = cj;
      } else if (calcDis(ci, cj, leftI, leftJ) < calcDis(ci, cj, rightI, rightJ)) {
        finger = 'L';
        leftI = ci;
        leftJ = cj;
      } else {
        if (hand === 'right') {
          finger = 'R';
          rightI = ci;
          rightJ = cj;
        } else {
          finger = 'L';
          leftI = ci;
          leftJ = cj;
        }
      }
    }

    answer += finger;
  }

  return answer;
};
