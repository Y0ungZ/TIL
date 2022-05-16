const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const N = +input[0].trim();
  const cardMap = new Map();

  const cardsInput = input[1].trim().split(' ').map(Number);
  for (let n = 0; n < N; n++) {
    const currentInput = cardsInput[n];
    if (cardMap.has(currentInput)) {
      cardMap.set(currentInput, cardMap.get(currentInput) + 1);
    } else {
      cardMap.set(currentInput, 1);
    }
  }

  const M = +input[2].trim();
  const selectCards = input[3].trim().split(' ').map(Number);
  const answer = [];

  for (let m = 0; m < M; m++) {
    const currentInput = selectCards[m];

    if (cardMap.has(currentInput)) {
      answer.push(cardMap.get(currentInput));
    } else {
      answer.push(0);
    }
  }

  console.log(answer.join(' '));
})();
