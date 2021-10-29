function solution(numbers) {
  const array = Array.from({ length: 10 }, () => false);

  for (let i = 0; i < numbers.length; i++) {
    array[numbers[i]] = true;
  }

  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!array[i]) {
      answer += i;
    }
  }

  return answer;
}
