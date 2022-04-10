function solution(s) {
  const stack = [];
  stack.push(s[0]);
  let index = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] != stack[index]) {
      stack.push(s[i]);
      index++;
    } else {
      stack.pop();
      index--;
    }
  }

  return stack.length ? 0 : 1;
}
