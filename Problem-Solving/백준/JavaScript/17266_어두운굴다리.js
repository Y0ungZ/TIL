const main = ( ()=>{
    const fs = require('fs');
    const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
  
    const N = +input[0].trim();
    const M = +input[1].trim();
    const streetLamps = input[2].trim().split(' ').map(Number);
    let answer = streetLamps[0];
    
    for (let m = 1; m < M; m++){
        if (streetLamps[m-1] + (2 * answer) < streetLamps[m]) {
            answer = Math.round((streetLamps[m] - streetLamps[m - 1]) / 2);
        }
    }

    if (streetLamps[M - 1] + answer < N) {
        answer = Math.round((N - streetLamps[M - 1]));
    }
    console.log(answer);

  })();