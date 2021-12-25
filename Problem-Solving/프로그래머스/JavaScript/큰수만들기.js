function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }

  return stack.slice(0, stack.length - k).join('');
}
