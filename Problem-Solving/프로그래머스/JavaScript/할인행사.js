function solution(want, number, discount) {
  let answer = 0;
  const wantObj = {};
  const countObj = {};

  for (let index = 0; index < want.length; index++) {
    wantObj[want[index]] = number[index];
    countObj[want[index]] = 0;
  }

  const isCorrect = countObj => {
    for (const [name, count] of Object.entries(wantObj)) {
      if (countObj[name] < count) {
        return false;
      }
    }
    return true;
  };

  for (let index = 0; index < 10; index++) {
    if (countObj[discount[index]] !== undefined) {
      countObj[discount[index]]++;
    }
  }

  if (isCorrect(countObj)) {
    answer++;
  }

  for (let index = 10; index <= discount.length; index++) {
    if (countObj[discount[index - 10]] !== undefined) {
      countObj[discount[index - 10]]--;
    }
    if (countObj[discount[index]] !== undefined) {
      countObj[discount[index]]++;
    }
    if (isCorrect(countObj)) {
      answer++;
    }
  }

  return answer;
}
