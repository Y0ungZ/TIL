const solution = (n, q, ans) => {
  let answer = 0;

  const getCombinations = () => {
    const combinations = [];

    const makeCombinations = (start, comb, count) => {
      if (count === 5) {
        combinations.push([...comb]);
        return;
      }
      for (let i = start; i <= n; i++) {
        comb.push(i);
        makeCombinations(i + 1, comb, count + 1);
        comb.pop();
      }
    };

    makeCombinations(1, [], 0);
    return combinations;
  };

  const validateSecretCode = code => {
    for (const [idx, nums] of q.entries()) {
      let count = 0;
      for (const num of nums) {
        if (code.includes(num)) {
          count++;
        }
      }
      if (count !== ans[idx]) {
        return false;
      }
    }
    return true;
  };

  const combinations = getCombinations();

  combinations.forEach(secretCode => {
    if (validateSecretCode(secretCode)) {
      answer++;
    }
  });

  return answer;
};
