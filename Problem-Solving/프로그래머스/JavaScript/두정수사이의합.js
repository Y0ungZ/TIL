function solution(a, b) {
  let answer = 0;

  let max = a;
  let min = b;

  if (a < b) {
    [max, min] = [min, max];
  }

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}
