(() => {
    // solution
    const fs = require('fs');
    const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    const [N, H] = input[0].split(' ').map(Number);
    const prefixSum = Array(H + 1).fill(0);
    let minDestroyedCount = N;
    
    for (let n = 1; n <= N; n++){
        const height = +input[n];
        if (n % 2 === 1) {
            // 석순
            prefixSum[0] += 1;
            prefixSum[height] -= 1;
            continue;
        }
        // 종유석
        prefixSum[H - height] += 1;
    }
    
    
    prefixSum.map((_, idx) => {
        if (idx) {
            prefixSum[idx] += prefixSum[idx - 1];
            minDestroyedCount = Math.min(minDestroyedCount, prefixSum[idx]);
        }
    });
    
    console.log(`${minDestroyedCount} ${prefixSum.filter((el, idx)=> idx!== H && el === minDestroyedCount).length}`);
})();