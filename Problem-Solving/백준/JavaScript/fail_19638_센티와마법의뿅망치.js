'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, H, T] = input[0].trim().split(' ').map(Number);
const pq = [];
let giant = 1;
let count = 0;
let hammer = 0;

for (let i = 0; i < N; i++) {
  const temp = Number(input[1 + i].trim());
  if (temp >= H) {
    count++;
  }
  pq.push(temp);
}

for (let t = T; t > 0; t--) {
  let bigIdx = 0;

  if (pq.length === 0) {
    break;
  }

  for (let i = 0; i < pq.length; i++) {
    if (pq[i] > pq[bigIdx]) {
      bigIdx = i;
    }
  }

  let peek = pq.splice(bigIdx, 1)[0];

  if (peek < H) {
    count = 0;
    break;
  }

  hammer++;

  if (peek > 1) {
    peek = Math.floor(peek / 2);
    giant = peek;
  }

  if (giant < 1) {
    giant = 1;
  }

  if (peek < H) {
    count--;
    if (count === 0) {
      break;
    }
  } else if (peek > 1) {
    pq.push(peek);
  }
}

if (count === 0) {
  console.log('YES');
  console.log(hammer);
} else {
  console.log('NO');
  console.log(giant);
}
