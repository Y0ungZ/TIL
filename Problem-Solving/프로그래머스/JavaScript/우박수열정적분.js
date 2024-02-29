function solution(k, ranges) {
  const INVALID_NUMBER = -1;
  const rounds = [];
  const areas = [];

  const collatz = number => {
    rounds.push(number);

    if (number === 1) {
      return;
    }
    if (number % 2 === 0) {
      collatz(number / 2);
    } else {
      collatz(number * 3 + 1);
    }
  };

  collatz(k);

  const N = rounds.length - 1;
  for (let n = 0; n < N; n++) {
    const square = Math.max(rounds[n], rounds[n + 1]);
    const triangle = Math.abs(rounds[n] - rounds[n + 1]) / 2;
    areas.push(square - triangle);
  }

  return ranges.map(([a, b]) => {
    if (a > N + b) {
      return INVALID_NUMBER;
    }
    let area = 0;
    for (let i = a; i < N + b; i++) {
      area += areas[i];
    }
    return area;
  });
}
