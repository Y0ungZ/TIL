function solution(price, money, count) {
  let answer = money;
  let play = price;

  for (let i = 1; i <= count; i++) {
    answer -= play * i;
  }

  return answer > 0 ? 0 : Math.abs(answer);
}
