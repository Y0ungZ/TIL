const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M, L, K] = input[0].trim().split(" ").map(Number);
  let answer = K;
  const shootingStars = [];

  for (let k = 0; k < K; k++) {
    shootingStars.push(input[1 + k].trim().split(" ").map(Number));
  }

  const includeCounter = (x, y) => {
    let count = 0;

    for (let k = 0; k < K; k++) {
      if (
        x <= shootingStars[k][0] &&
        shootingStars[k][0] <= x + L &&
        y <= shootingStars[k][1] &&
        shootingStars[k][1] <= y + L
      ) {
        count++;
      }
    }
    return count;
  };

  for (let i = 0; i < K; i++) {
    for (let j = 0; j < K; j++) {
      answer = Math.min(answer, K - includeCounter(shootingStars[i][0], shootingStars[j][1]));
    }
  }

  console.log(answer);
})();
