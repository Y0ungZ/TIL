const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const N = +fs.readFileSync(filePath).toString().trim();
  const array = Array.from({ length: N }, () => Array(N).fill(0));

  function patternSelect(i, j, width) {
    if (Math.floor(i / width) % 3 === 1 && Math.floor(j / width) % 3 === 1) {
      array[i][j] = " ";
    } else {
      if (width === 0) {
        array[i][j] = "*";
      } else {
        patternSelect(i, j, Math.floor(width / 3));
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      patternSelect(i, j, N);
    }
  }

  let answer = "";

  array.forEach((row) => {
    answer += row.join("");
    answer += "\n";
  });

  console.log(answer);
})();
