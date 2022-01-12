function solution(priorities, location) {
  let answer = 0;
  let stage = 1;
  let priority = priorities.map((el, idx) => [el, idx]);

  while (true) {
    const [value, idx] = priority.shift();

    let isBiggest = true;

    for (let i = 0; i < priority.length; i++) {
      if (value < priority[i][0]) {
        isBiggest = false;
        break;
      }
    }

    if (isBiggest) {
      if (idx === location) {
        answer = stage;
        break;
      }
      stage++;
    } else {
      priority.push([value, idx]);
    }
  }

  return answer;
}
