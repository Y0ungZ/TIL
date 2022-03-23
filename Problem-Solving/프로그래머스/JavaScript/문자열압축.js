function solution(s) {
  let answer = s.length;
  let halfLength = Math.floor(s.length / 2);

  for (let i = 1; i <= halfLength; i++) {
    let index = i;
    let beforeWord = s.substr(0, i);
    let number = 1;
    let remain = 0;
    let result = '';
    for (let j = 0; j < s.length; j++) {
      if (index + i <= s.length + 1) {
        let currentWord = s.substr(index, i);
        if (beforeWord === currentWord) {
          number++;
        } else {
          if (number > 1) {
            result += `${number}${beforeWord}`;
          } else {
            result += `${beforeWord}`;
          }
          number = 1;
        }
        beforeWord = currentWord;
        index += i;
      } else {
        if (j === s.length - 1) {
          if (number > 1) {
            result += `${number}${beforeWord}`;
          } else {
            result += `${beforeWord}`;
          }
        } else {
          remain = index - i;
        }
        break;
      }
    }
    if (remain != 0) {
      if (number > 1) {
        answer = Math.min(answer, String(number).length + result.length + (s.length - remain));
      } else {
        answer = Math.min(answer, result.length + (s.length - remain));
      }
    } else {
      answer = Math.min(answer, result.length);
    }
  }
  return answer;
}
