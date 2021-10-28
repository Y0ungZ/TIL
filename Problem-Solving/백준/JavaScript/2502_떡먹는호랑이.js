'use stirict';

const fs = require('fs');

const [D, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const fiboA = Array.from({ length: D + 1 }, () => 0);
const fiboB = Array.from({ length: D + 1 }, () => 0);

fiboA[1] = 1;
fiboA[2] = 0;
fiboB[1] = 0;
fiboB[2] = 1;

const fibo = (n, type) => {
  if (n === 1) {
    switch (type) {
      case 'A':
        return 1;
      case 'B':
        return 0;
      default:
        return null;
    }
  }
  if (n === 2) {
    switch (type) {
      case 'A':
        return 0;
      case 'B':
        return 1;
      default:
        return null;
    }
  }

  if (type === 'A' && fiboA[n] != 0) {
    return fiboA[n];
  }
  if (type === 'B' && fiboB[n] != 0) {
    return fiboB[n];
  }

  if (type === 'A') {
    fiboA[n] = fibo(n - 1, 'A') + fibo(n - 2, 'A');
  }
  if (type === 'B') {
    fiboB[n] = fibo(n - 1, 'B') + fibo(n - 2, 'B');
  }

  return type === 'A' ? fiboA[n] : fiboB[n];
};

fibo(D, 'A');
fibo(D, 'B');

let one = 1;
let two = 1;

const maxA = Math.floor(K / fiboA[D]);
const maxB = Math.floor(K / fiboB[D]);

let flag = false;

for (let i = 1; i < maxA; i++) {
  let temp = i * fiboA[D];

  for (let j = i; j < maxB; j++) {
    let temp2 = j * fiboB[D];

    if (temp + temp2 > K) {
      break;
    }

    if (temp + temp2 === K) {
      one = i;
      two = j;

      flag = true;
      break;
    }

    if (flag) break;
  }
}

console.log(one);
console.log(two);
