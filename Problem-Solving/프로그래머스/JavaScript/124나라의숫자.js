function solution(n) {
  var answer = [];
  const world = [1, 2, 4];

  while (n > 0) {
    n -= 1;
    answer.push(world[n % 3]);
    n = Math.floor(n / 3);
  }

  return answer.reverse().join("");
}
