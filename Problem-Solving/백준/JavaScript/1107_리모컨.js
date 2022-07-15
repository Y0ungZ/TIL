const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const N = +input[0].trim();
  const M = +input[1].trim();
  const remoteButtons = Array(10).fill(true);
  let brokenButtons = [];

  if (M > 0) {
    brokenButtons = input[2].trim().split(" ").map(Number);
  }

  for (let m = 0; m < M; m++) {
    remoteButtons[brokenButtons[m]] = false;
  }

  let count = Math.abs(100 - N);

  const buttonClick = (current) => {
    for (let i = 0; i < 10; i++) {
      if (remoteButtons[i]) {
        const temp = current + String(i);
        count = Math.min(count, Math.abs(N - +temp) + temp.length);

        if (temp.length < 6) {
          buttonClick(temp);
        }
      }
    }
  };

  if (M < 10) {
    buttonClick("");
  }

  console.log(count);
})();
