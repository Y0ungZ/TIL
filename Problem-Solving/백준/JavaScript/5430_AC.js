const parsingArray = (string) => {
  if (string.length === 2) {
    return [];
  }
  return Array.from(string.slice(1, -1).split(","));
};

const printArray = (array) => {
  return "[" + array.join(",") + "]";
};

const isEmpty = (leftIdx, rightIdx) => {
  return leftIdx === rightIdx ? true : false;
};

const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

  const ERROR_MSG = "error";

  const answer = [];

  for (let t = 0; t < T; t++) {
    const p = input[t * 3].trim();
    const numbers = parsingArray(input[t * 3 + 2].trim());

    let leftIdx = 0,
      rightIdx = numbers.length ;
    let currentIdx = 0;

    for (let i = 0; i < p.length; i++) {
      const command = p[i];
      if (command === "R") {
        currentIdx = currentIdx === leftIdx ? rightIdx : leftIdx;
      } else {
        if (
            isEmpty(leftIdx, rightIdx) ||
            rightIdx < leftIdx ||
            rightIdx < 0 ||
            leftIdx >= numbers.length
          ) {
            answer.push(ERROR_MSG);
            break;
          }
          
        if (currentIdx === rightIdx) {
          rightIdx--;
          currentIdx--;
        } else {
          leftIdx++;
          currentIdx++;
        }
      }
    }

    if (answer.length !== t + 1) {
      const result = [];
      if (currentIdx === leftIdx) {
        for (let j = leftIdx; j < rightIdx; j++) {
          result.push(numbers[j]);
        }
      } else {
        for (let j = rightIdx-1; j >= leftIdx; j--) {
          result.push(numbers[j]);
        }
      }

      answer.push(printArray(result));
    }
  }

  console.log(answer.join("\n"));
})();
