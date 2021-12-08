const MAX = 3000;

const primeArr = Array.from({ length: 30001 }, () => true);

const isPrime = () => {
  for (let i = 2; i <= MAX; i++) {
    if (!primeArr[i]) continue;

    for (let j = 2 * i; j <= MAX; j += i) {
      primeArr[j] = false;
    }
  }
};

const solution = (nums) => {
  var answer = 0;
  isPrime();

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let num = nums[i] + nums[j] + nums[k];
        if (primeArr[num]) {
          answer++;
        }
      }
    }
  }

  return answer;
};
