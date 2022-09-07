function solution(n, k) {
  let answer = 0;
  const convertKBinary = n.toString(k);
  const dividedNumbers = convertKBinary.split(0);

  function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  dividedNumbers.forEach((number) => {
    const strToNumber = Number(number);
    isPrimeNumber(strToNumber) && answer++;
  });

  return answer;
}
