function solution(n, t, m, p) {
  const answer = [];
  let currentNum = 0;
  let currentIdx = 0;
  let exitFlag = true;

  while (exitFlag) {
    const convertNBinary = currentNum.toString(n);

    for (let i = 0; i < convertNBinary.length; i++) {
      if ((currentIdx + i) % m === p - 1) {
        answer.push(convertNBinary[i].toUpperCase());

        if (answer.length === t) {
          exitFlag = false;
          break;
        }
      }
    }

    currentNum++;
    currentIdx += convertNBinary.length;
  }

  return answer.join("");
}
