function solution(dartResult) {
  const answer = [];
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { "#": -1, "*": 2, undefined: 1 };
  const stageSplit = dartResult.split(/(10|[0-9])/).slice(1);

  for (let i = 0; i < 3; i++) {
    const score = stageSplit[i * 2];
    const specials = stageSplit[i * 2 + 1];

    answer.push(Math.pow(score, bonus[specials[0]]));
    answer[i] *= options[specials[1]];

    if (specials[1] === "*" && i) {
      answer[i - 1] *= +options[specials[1]];
    }
  }

  return answer.reduce((a, b) => a + b);
}
