const GCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return GCD(b, a % b);
};

const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

  console.log(GCD(A, B));
  console.log(LCM(A, B));
})();
