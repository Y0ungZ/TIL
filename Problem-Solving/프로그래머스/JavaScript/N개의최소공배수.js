const GCD = (a, b) => {
  if (b === 0) return a;
  else return GCD(b, a % b);
};

const solution = (arr) => {
  let answer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let abGCD = GCD(answer, arr[i]);
    answer = (answer * arr[i]) / abGCD;
  }

  return answer;
};
