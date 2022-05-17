const binomical = (n, k, dp) => {
  if (dp[n][k] > 0) {
    return dp[n][k];
  }

  if (n === k || k === 0) {
    dp[n][k] = 1;
    return dp[n][k];
  }
  return binomical(n - 1, k - 1, dp) + binomical(n - 1, k, dp);
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

  const dp = Array.from(Array(11), () => Array(11).fill(0));

  console.log(binomical(N, K, dp));
})();
