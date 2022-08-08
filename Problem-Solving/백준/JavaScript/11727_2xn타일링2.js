const main = (function () {
    const fs = require('fs');
    const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
    const N = +fs.readFileSync(filePath).toString().trim();
    const dp = Array(N + 1).fill(0);
    const MOD_NUMBER = 10007;

    dp[0] = 1;
    dp[1] = 1;

    for (let n = 2; n <= N; n++){
        dp[n] = dp[n - 1] + (dp[n - 2] * 2)% MOD_NUMBER;
    }

    console.log(dp[N]%MOD_NUMBER);

  })();