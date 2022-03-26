function solution(s) {
  let answer = 0;
  const str = s.split('');

  for (let i = 0; i < str.length; i++) {
    const current = str.slice(i, str.length).concat(...str.slice(0, i));
    const stack = [];
    for (let j = 0; j < current.length; j++) {
      switch (current[j]) {
        case ']':
          if (stack[stack.length - 1] === '[') {
            stack.pop();
          } else {
            stack.push(current[j]);
          }
          break;
        case ')':
          if (stack[stack.length - 1] === '(') {
            stack.pop();
          } else {
            stack.push(current[j]);
          }
          break;
        case '}':
          if (stack[stack.length - 1] === '{') {
            stack.pop();
          } else {
            stack.push(current[j]);
          }
          break;
        default:
          stack.push(current[j]);
          break;
      }
    }
    if (!stack.length) {
      answer++;
    }
  }
  return answer;
}
