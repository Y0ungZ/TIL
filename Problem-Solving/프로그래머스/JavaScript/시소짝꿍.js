function solution(weights) {
  const ratios = [1, 2 / 3, 1 / 2, 3 / 4];
  let answer = 0;
  weights.sort((a, b) => a - b);
  const partner = new Map();

  weights.forEach(weight => {
    ratios.forEach(ratio => {
      const partnerWeight = weight * ratio;

      if (partner.has(partnerWeight)) {
        answer += partner.get(partnerWeight);
      }
    });
    partner.set(weight, (partner.get(weight) || 0) + 1);
  });

  return answer;
}
