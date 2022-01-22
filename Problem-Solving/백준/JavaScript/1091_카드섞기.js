'use strict';

const currect = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != i % 3) {
      return false;
    }
  }
  return true;
};

const shuffle = (array, menual) => {
  let temp = Array.from({ length: array.length }, () => 0);

  for (let i = 0; i < array.length; i++) {
    temp[menual[i]] = array[i];
  }
  return temp;
};

const cycle = (array, initial) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != initial[i]) {
      return false;
    }
  }
  return true;
};

(function () {
  const fs = require('fs');

  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const N = +input[0].trim();
  const P = input[1].trim().split(' ').map(Number);
  const S = input[2].trim().split(' ').map(Number);

  let result = 0;

  let currentCard = P.slice();

  if (!currect(currentCard)) {
    while (true) {
      currentCard = shuffle(currentCard, S);
      result++;

      if (currect(currentCard)) {
        break;
      }

      if (cycle(currentCard, P)) {
        result = -1;
        break;
      }
    }
  }

  console.log(result);
})();
