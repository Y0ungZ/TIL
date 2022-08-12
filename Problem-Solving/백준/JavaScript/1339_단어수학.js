const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
  const words = [];

  input.forEach((el) => {
    words.push(el.trim());
  });

  const digitMap = new Map();
  const wordLengthArray = Array.from({ length: 11 }, () => Array());

  for (let n = 0; n < +N; n++) {
    const currentWord = words[n];
    for (let l = 0; l < currentWord.length; l++) {
      wordLengthArray[currentWord.length - l].push(currentWord[l]);
    }
  }

  for (let i = 1; i < 11; i++) {
    const currentAlpha = wordLengthArray[i];
    const POW_NUM = Math.pow(10, i - 1);
    for (let j = 0; j < currentAlpha.length; j++) {
      if (digitMap.has(currentAlpha[j])) {
        const getValue = digitMap.get(currentAlpha[j]);
        digitMap.set(currentAlpha[j], getValue + POW_NUM);
      } else {
        digitMap.set(currentAlpha[j], POW_NUM);
      }
    }
  }

  let count = 9;
  let answer = 0;

  const mapToArray = Array.from(digitMap).sort((a, b) => b[1] - a[1]);
  const findAlpha = {};

  for (let i = 0; i < mapToArray.length; i++) {
    findAlpha[mapToArray[i][0]] = count--;
  }

  for (let n = 0; n < +N; n++) {
    const currentWord = words[n];
    let convertToNumberStr = "";
    for (let l = 0; l < currentWord.length; l++) {
      convertToNumberStr += findAlpha[currentWord[l]];
    }
    answer += +convertToNumberStr;
  }

  console.log(answer);
})();
