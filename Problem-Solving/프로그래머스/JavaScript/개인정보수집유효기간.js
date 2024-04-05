function solution(today, terms, privacies) {
  const DATE = 28;
  const answer = [];
  const termsMap = new Map();
  const [tYear, tMonth, tDay] = today.split('.').map(Number);

  terms.forEach(info => {
    const [term, period] = info.split(' ');
    termsMap.set(term, +period);
  });

  const calcDate = (year, month, day) => {
    return year * (DATE * 12) + month * DATE + day;
  };

  const getValidDate = (privacy, term) => {
    const [pYear, pMonth, pDay] = privacy.split('.').map(Number);
    const termPeriod = termsMap.get(term) * DATE - 1;
    const pDate = calcDate(pYear, pMonth, pDay);

    return pDate + termPeriod;
  };

  privacies.forEach((info, idx) => {
    const [privacy, term] = info.split(' ');
    const vDate = getValidDate(privacy, term);
    const tDate = calcDate(tYear, tMonth, tDay);

    if (tDate > vDate) {
      answer.push(idx + 1);
    }
  });

  return answer;
}
