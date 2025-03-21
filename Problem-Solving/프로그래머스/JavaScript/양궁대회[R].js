const solution = (n, info) => {
  const LENGTH = info.length;
  let answer = 0;
  let maxDiff = 0;

  const calcScore = ryanInfo => {
    let ryanScore = 0;
    let apeachScore = 0;
    for (let len = 0; len < LENGTH; len++) {
      if (info[len] !== 0 && info[len] >= ryanInfo[len]) {
        apeachScore += 10 - len;
        continue;
      }
      if (ryanInfo[len] !== 0) {
        ryanScore += 10 - len;
      }
    }
    return [apeachScore, ryanScore];
  };

  const startGame = (ryanInfo = Array(LENGTH).fill(0), cnt = n, depth = 0) => {
    if (cnt < 0) return;
    if (depth === LENGTH) {
      if (cnt > 0) {
        ryanInfo[LENGTH - 1] += cnt;
      }
      const [apeachScore, ryanScore] = calcScore(ryanInfo);
      const diff = ryanScore - apeachScore;
      if (diff === 0) {
        return;
      }
      const joinScoreString = [...ryanInfo].reverse().join('');
      if (diff > maxDiff) {
        maxDiff = diff;
        answer = joinScoreString;
      } else if (diff === maxDiff) {
        if (+joinScoreString > +answer) {
          answer = joinScoreString;
        }
      }

      return;
    }
    if (info[depth] >= ryanInfo[depth]) {
      const newInfo = [...ryanInfo];
      const shootCnt = info[depth] + 1;
      newInfo[depth] += shootCnt;
      startGame(newInfo, cnt - shootCnt, depth + 1);
    }
    startGame(ryanInfo, cnt, depth + 1);
  };

  startGame();
  return answer === 0 ? [-1] : answer.split('').reverse().map(Number);
};
