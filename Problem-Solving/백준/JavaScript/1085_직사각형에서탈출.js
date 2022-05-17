const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const [X, Y, W, H] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

  console.log(Math.min(X - 0, Math.min(Y - 0, Math.min(Math.abs(W - X)), Math.abs(H - Y))));
})();
