function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));
  let count = 1;
  let r = -1,
    c = 0;

  for (let direction = 0; direction < n; direction++) {
    for (let idx = direction; idx < n; idx++) {
      if (direction % 3 === 0) {
        r += 1;
      }
      if (direction % 3 === 1) {
        c += 1;
      }
      if (direction % 3 === 2) {
        r -= 1;
        c -= 1;
      }
      answer[r][c] = count++;
    }
  }

  return answer.flatMap(line => line.filter(num => num !== 0));
}
