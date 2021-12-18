function solution(lottos, win_nums) {
  let answer = [];
  let zeroCount = 0;
  let matchConfirm = Array.from({ length: 46 }, () => false);
  let matchCount = 0;
  let prize = [6, 6, 5, 4, 3, 2, 1];

  lottos.forEach((el) => {
    if (el === 0) {
      zeroCount++;
    }
  });

  win_nums.forEach((el) => {
    matchConfirm[el] = true;
  });

  for (let i = 0; i < lottos.length; i++) {
    if (matchConfirm[lottos[i]]) {
      matchCount++;
    }
  }

  answer.push(prize[matchCount + zeroCount]);
  answer.push(prize[matchCount]);

  return answer;
}
