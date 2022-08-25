function solution(survey, choices) {
  const score = [3, 2, 1, 0, 1, 2, 3];
  const KBTI = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  const typeMap = new Map();
  let answer = "";

  KBTI.forEach((types) => {
    typeMap.set(types[0], 0);
    typeMap.set(types[1], 0);
  });

  choices.forEach((choice, idx) => {
    let type;

    if (choice > 4) {
      type = survey[idx][1];
    } else {
      type = survey[idx][0];
    }

    typeMap.set(type, typeMap.get(type) + score[choice - 1]);
  });

  for (let i = 0; i < 4; i++) {
    const [typeLeft, typeRight] = KBTI[i];

    if (typeMap.get(typeLeft) < typeMap.get(typeRight)) {
      answer += typeRight;
    } else {
      answer += typeLeft;
    }
  }

  return answer;
}
