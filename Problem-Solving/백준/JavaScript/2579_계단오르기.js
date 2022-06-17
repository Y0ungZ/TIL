const main = (function () {
    const fs = require('fs');
    const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
  
    const N = +input[0].trim();

    const dp = Array(N + 1).fill(0);
    const stairs = Array(N + 1).fill(0);
    

    for (let n = 0; n < N; n++){
        const currentInput = +input[1 + n].trim();
        stairs[n+1]= currentInput;
    }

    dp[1] = stairs[1];
    dp[2] = stairs[1] + stairs[2];

    for (let i = 3; i <= N; i++){
        dp[i] = Math.max(dp[i - 3] + stairs[i - 1] + stairs[i], dp[i - 2] + stairs[i]);
    }

    console.log(dp[N]);
  })();