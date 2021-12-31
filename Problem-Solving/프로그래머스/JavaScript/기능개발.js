function solution(progresses, speeds) {
  let answer = [];

  let beforeTime = 0;

  progresses.forEach((el, idx) => {
    let time = Math.ceil((100 - el) / speeds[idx]);

    if (idx === 0) {
      beforeTime = time;
      progresses[0] = time;
    } else {
      progresses[idx] = time;
      beforeTime = time;
    }
  });

  let count = 1;
  let beforeNumber = progresses[0];

  for (let i = 1; i < progresses.length; i++) {
    if (beforeNumber < progresses[i]) {
      beforeNumber = progresses[i];
      answer.push(count);
      count = 1;
    } else {
      count++;
    }
  }

  answer.push(count);

  return answer;
}
