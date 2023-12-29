function solution(n) {
  let answer = 0;
  let quot = n;

  while (quot > 0) {
    quot = quot / 2;

    if (!Number.isInteger(quot)) {
      answer++;
      quot = Math.floor(quot);
    }
  }

  return answer;
}
