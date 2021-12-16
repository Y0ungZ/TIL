const solution = (answers) => {
  let answer = [];
  let people1 = [1, 2, 3, 4, 5];
  let people2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let people3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (people1[i % people1.length] === answers[i]) {
      count[0]++;
    }
    if (people2[i % people2.length] === answers[i]) {
      count[1]++;
    }
    if (people3[i % people3.length] === answers[i]) {
      count[2]++;
    }
  }

  let maxValue = Math.max(...count);

  for (let i = 0; i < count.length; i++) {
    if (count[i] === maxValue) {
      answer.push(i + 1);
    }
  }

  return answer;
};
