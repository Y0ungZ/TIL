'use strict';

const fs = require('fs');

const [N, F] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const num = [];

for (let i = 0; i < N; i++) {
  num.push(i + 1);
}

const pascal = (array) => {
  if (array.length === 2) {
    return array[0] + array[1];
  }

  if (array.length === 1) {
    return array[0];
  }

  let temp = [];
  let i = 0;
  let j = 1;

  while (j < array.length) {
    temp.push(array[i] + array[j]);
    i++;
    j++;
  }

  return pascal(temp);
};

const NP = () => {
  let i = N - 1;

  while (i > 0 && num[i - 1] >= num[i]) --i;

  if (i === 0) return false;

  let j = N - 1;

  while (num[i - 1] >= num[j]) --j;

  let swap = num[i - 1];
  num[i - 1] = num[j];
  num[j] = swap;

  let k = N - 1;
  while (i < k) {
    swap = num[i];
    num[i] = num[k];
    num[k] = swap;
    ++i;
    --k;
  }
  return true;
};

if (pascal(num) === F) {
  console.log(num.join(' '));
  return;
}

while (NP()) {
  if (pascal(num) === F) {
    console.log(num.join(' '));
    return;
  }
}
