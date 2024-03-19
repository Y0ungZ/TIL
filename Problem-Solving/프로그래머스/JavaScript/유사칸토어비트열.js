function solution(n, l, r) {
  let answer = 0;

  const isOneBit = length => {
    if (length !== 2 && length < 5) {
      return true;
    }
    if ((length - 2) % 5 === 0) {
      return false;
    }

    return isOneBit(Math.floor(length / 5));
  };

  for (let i = l - 1; i < r; i++) {
    if (isOneBit(i)) answer++;
  }

  return answer;
}
