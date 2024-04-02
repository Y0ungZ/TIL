function solution(begin, end) {
  const answer = [];

  const getMaxGCD = n => {
    if (n === 1) {
      return 0;
    }

    const results = [];
    for (let m = 2; m <= Math.sqrt(n); m++) {
      if (n % m === 0) {
        results.push(m);

        if (n / m <= 10000000) {
          return n / m;
        }
      }
    }

    if (results.length) {
      return results[results.length - 1];
    }
    return 1;
  };

  for (let n = begin; n <= end; n++) {
    answer.push(getMaxGCD(n));
  }

  return answer;
}
