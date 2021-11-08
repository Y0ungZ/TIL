function solution(brown, yellow) {
  let answer = [];

  const num = brown + yellow;

  let garo = num / 3;
  let sero = 3;

  while (true) {
    if (garo < sero) {
      break;
    }

    if (num % sero === 0) {
      if ((garo - 2) * (sero - 2) === yellow) {
        answer.push(garo, sero);
        break;
      }
    }

    sero++;
    garo = num / sero;
  }

  return answer;
}
