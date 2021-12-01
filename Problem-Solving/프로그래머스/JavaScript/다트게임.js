const solution = (dartResult) => {
  let score = dartResult.match(/10|[0-9]/g);
  let dart = dartResult.split(/10|[0-9]/).slice(1);

  for (let i = 0; i < 3; i++) {
    if (dart[i].length === 2) {
      let bonus = dart[i].charAt(0);
      let option = dart[i].charAt(1);

      if (bonus === 'D') {
        score[i] = Math.pow(score[i], 2);
      } else if (bonus === 'T') {
        score[i] = Math.pow(score[i], 3);
      }

      if (option === '*') {
        if (i === 0) {
          score[i] *= 2;
        } else {
          score[i] *= 2;
          score[i - 1] *= 2;
        }
      } else {
        score[i] *= -1;
      }
    } else {
      let bonus = dart[i].charAt(0);
      if (bonus === 'D') {
        score[i] = Math.pow(score[i], 2);
      } else if (bonus === 'T') {
        score[i] = Math.pow(score[i], 3);
      }
    }
  }

  return score.reduce((a, b) => Number(a) + Number(b));
};
