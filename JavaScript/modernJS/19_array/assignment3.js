const getMaxSubSum = (array) => {
  let sum = 0;
  let maxValue = 0;

  for (num of array) {
    sum += num;

    if (sum < 0) {
      sum = 0;
    }

    maxValue = Math.max(sum, maxValue);
  }

  return maxValue;
};

const arr = [100, -9, 2, -3, 5];

console.log(getMaxSubSum(arr));
