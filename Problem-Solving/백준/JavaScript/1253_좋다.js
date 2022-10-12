const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");
  const numbers = input
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let count = 0;

  numbers.forEach((number, idx) => {
    let start = 0;
    let end = +N - 1;

    while (start < end) {
      const currentSum = numbers[start] + numbers[end];

      if (currentSum === number) {
        if (start !== idx && end !== idx) {
          count++;
          break;
        }

        if (start === idx) {
          start++;
        }

        if (end === idx) {
          end--;
        }
      } else if (currentSum > number) {
        end--;
      } else {
        start++;
      }
    }
  });

  console.log(count);
})();
