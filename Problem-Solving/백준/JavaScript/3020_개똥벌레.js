const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, H] = input[0].trim().split(" ").map(Number);
  const prefixSum = Array(H + 1).fill(0);
  let minDestruction = N;

  for (let n = 1; n <= N; n++) {
    const height = +input[n];
    if (n % 2 === 1) {
      //석순
      prefixSum[0] += 1;
      prefixSum[height] -= 1;
      continue;
    }
    //종유석
    prefixSum[H - height] += 1;
  }

  prefixSum.map((_, idx) => {
    if (idx) {
      prefixSum[idx] += prefixSum[idx - 1];
      minDestruction = Math.min(minDestruction, prefixSum[idx]);
    }
  });

  const minSections = prefixSum.filter((el, idx) => idx !== H && el === minDestruction).length;

  console.log(`${minDestruction} ${minSections}`);
})();
