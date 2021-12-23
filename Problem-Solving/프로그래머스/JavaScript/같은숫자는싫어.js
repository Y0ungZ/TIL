const solution = (arr) => {
  let answer = [];
  let before = -1;

  arr.forEach((el) => {
    if (before !== el) {
      answer.push(el);
    }
    before = el;
  });

  return answer;
};
