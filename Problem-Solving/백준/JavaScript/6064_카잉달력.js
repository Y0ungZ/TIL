const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const T = +input[0];
  const answer = [];

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  for (let t = 1; t <= T; t++) {
    const [M, N, x, y] = input[t].trim().split(" ").map(Number);
    const LIMIT = lcm(M, N);

    if (M === x && N === y) {
      answer.push(LIMIT);
      continue;
    }

    for (let i = x; i <= LIMIT; i += M) {
      const calcN = i % N === 0 ? N : i % N;
      if (calcN === y) {
        answer.push(i);
        break;
      }
    }

    if (answer.length !== t) {
      answer.push(-1);
    }
  }

  console.log(answer.join("\n"));
})();
