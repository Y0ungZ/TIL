function solution(r1, r2) {
  let answer = 0;

  for (let x = 1; x <= r2; x++) {
    let y1 = Math.ceil(Math.sqrt(Math.pow(r1, 2) - Math.pow(x, 2)));
    const y2 = Math.floor(Math.sqrt(Math.pow(r2, 2) - Math.pow(x, 2)));

    if (Number.isNaN(y1)) {
      y1 = 0;
    }

    answer += y2 - y1 + 1;
  }

  return answer * 4;
}
