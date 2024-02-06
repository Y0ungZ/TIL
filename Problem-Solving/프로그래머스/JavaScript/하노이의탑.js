function solution(n) {
  const answer = [];

  function hanoi(n, start, via, to) {
    if (n === 1) {
      answer.push([start, to]);
      return;
    }
    hanoi(n - 1, start, to, via);
    answer.push([start, to]);
    hanoi(n - 1, via, start, to);
  }

  hanoi(n, 1, 2, 3);
  return answer;
}
