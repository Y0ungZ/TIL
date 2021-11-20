function solution(n) {
  let answer = '';
  let to3 = n.toString(3);

  for (let i = to3.length - 1; i >= 0; i--) {
    answer += to3[i];
  }

  return parseInt(answer, 3);
}
