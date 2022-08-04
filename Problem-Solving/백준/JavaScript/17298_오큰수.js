const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");
  const answer = Array(+N).fill(0);

  const sequence = input.trim().split(" ").map(Number);
  const stack = [];

  function returnALargeData(number, stack) {
    if (number < stack[stack.length - 1]) {
      return ["stack", stack[stack.length - 1]];
    } else {
      return ["number", number];
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    if (!stack.length) {
      answer[i] = -1;
      stack.push(sequence[i]);
      continue;
    }
    const [largeData, data] = returnALargeData(sequence[i], stack);

    switch (largeData) {
      case "stack":
        answer[i] = data;
        stack.push(sequence[i]);
        break;
      case "number":
        while (true) {
          stack.pop();
          if (!stack.length) {
            answer[i] = -1;
            stack.push(sequence[i]);
            break;
          }
          const [nextLargeData, data] = returnALargeData(sequence[i], stack);
          if (nextLargeData === "stack") {
            answer[i] = data;
            stack.push(sequence[i]);
            break;
          }
        }
        break;
      default:
        break;
    }
  }

  console.log(answer.join(" "));
})();
