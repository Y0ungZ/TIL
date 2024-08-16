function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];

  stack.push(0);

  for (let index = 1; index < numbers.length; index++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[index]) {
      answer[stack.pop()] = numbers[index];
    }

    stack.push(index);
  }

  return answer;
}
