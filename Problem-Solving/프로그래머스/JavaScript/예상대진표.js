function solution(n, a, b) {
  let answer = 1;
  let round = 2;

  while (true) {
    const groupA = Math.ceil(a / round);
    const groupB = Math.ceil(b / round);

    if (groupA === groupB) {
      break;
    }

    round *= 2;
    answer++;
  }

  return answer;
}
