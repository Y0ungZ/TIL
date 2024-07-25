function solution(sequence, k) {
  const answer = [-1, -1];
  let minLength = 1000001;
  const LENGTH = sequence.length;
  let len = 0;
  let sum = 0;

  for (let index = 0; index < LENGTH; index++) {
    sum += sequence[index];
    len += 1;

    if (sum > k) {
      while (sum > k) {
        sum -= sequence[index - len + 1];
        len--;
      }
    }

    if (sum === k) {
      if (minLength > len) {
        minLength = len;
        answer[0] = index - len + 1;
        answer[1] = index;
      }
    }
  }

  return answer;
}
