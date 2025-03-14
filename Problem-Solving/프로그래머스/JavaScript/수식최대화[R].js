function solution(expression) {
  const numbers = expression.split(/\D/).map(Number);
  const operators = expression.split(/\d+/).filter(Boolean);
  const uniqueOperators = [...new Set(operators)];
  const permutations = [];

  const permute = (arr, result = []) => {
    if (arr.length === 0) {
      permutations.push(result);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      const fixed = [...arr];
      const curr = fixed.splice(i, 1);
      permute(fixed, result.concat(curr));
    }
  };

  permute(uniqueOperators);

  const calculator = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return 0;
    }
  };

  let answer = 0;
  permutations.forEach(order => {
    let nums = [...numbers];
    let ops = [...operators];
    order.forEach(op => {
      for (let i = 0; i < ops.length; i++) {
        if (ops[i] === op) {
          nums[i] = calculator(nums[i], nums[i + 1], op);
          nums.splice(i + 1, 1);
          ops.splice(i, 1);
          i--;
        }
      }
    });
    answer = Math.max(answer, Math.abs(nums[0]));
  });

  return answer;
}
