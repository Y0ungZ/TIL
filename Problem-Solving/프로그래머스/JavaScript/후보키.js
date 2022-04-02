function isExist(candidate, current) {
  //현재 순열에 대한 최소성 여부(비트연산)
  for (let i = 0; i < candidate.length; i++) {
    if ((candidate[i] & current) === candidate[i]) {
      return true;
    }
  }
  candidate.push(current);
  return false;
}

function solution(relation) {
  const ROW = relation.length;
  const COLUMN = relation[0].length;
  let answer = 0;
  const candidate = [];

  for (let i = 1; i < 1 << COLUMN; i++) {
    //순열
    const set = new Set();
    for (let j = 0; j < ROW; j++) {
      let key = '';
      for (let k = 0; k < COLUMN; k++) {
        if ((i & (1 << k)) != 0) {
          key += String(relation[j][k]);
        }
      }
      set.add(key);
    }
    if (set.size === ROW && !isExist(candidate, i)) {
      answer++;
    }
  }

  return answer;
}
