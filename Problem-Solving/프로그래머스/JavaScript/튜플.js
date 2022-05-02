function solution(s) {
  const answer = [];
  const union = [];

  let temp = [];
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') {
      temp = [];
      str = '';
    } else if (s[i] === '}') {
      if (str.length) {
        temp.push(+str);
      }
      if (temp.length) {
        union.push(temp);
      }

      temp = [];
      str = '';
    } else if (s[i] === ',') {
      temp.push(+str);
      str = '';
    } else {
      str += s[i];
    }
  }

  union.sort((a, b) => a.length - b.length);

  const set = new Set();

  for (let i = 0; i < union.length; i++) {
    const current = union[i];

    for (let j = 0; j < current.length; j++) {
      if (!set.has(current[j])) {
        set.add(current[j]);
        answer.push(current[j]);
      }
    }
  }

  return answer;
}
