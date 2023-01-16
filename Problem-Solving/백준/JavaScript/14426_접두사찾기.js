const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M] = input[0].trim().split(" ").map(Number);
  const S = [];
  let count = 0;

  for (let i = 1; i <= N; i++) {
    S.push(input[i].trim());
  }

  for (let i = N + 1; i <= N + M; i++) {
    const prefixStr = input[i].trim();

    for (let j = 0; j < S.length; j++) {
      if (S[j].startsWith(prefixStr)) {
        count++;
        break;
      }
    }
  }

  console.log(count);
})();
