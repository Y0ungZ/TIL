const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const answer = [];
  let notSpeakingSeeingPeopleCount = 0;
  const notSpeakingPeople = new Set();

  const [N, M] = input[0].trim().split(' ').map(Number);

  for (let n = 0; n < N; n++) {
    notSpeakingPeople.add(input[1 + n].trim());
  }

  for (let m = 0; m < M; m++) {
    const currentInput = input[N + 1 + m].trim();
    if (notSpeakingPeople.has(currentInput)) {
      answer.push(currentInput);
      notSpeakingSeeingPeopleCount++;
    }
  }

  answer.sort();

  console.log(notSpeakingSeeingPeopleCount);
  console.log(answer.join('\n'));
})();
