function solution(n, words) {
  const answer = [0, 0];
  const wordSet = new Set();
  let beforeEnd = '';

  for (let idx = 0; idx < words.length; idx++) {
    const word = words[idx];
    let isPass = true;

    if (wordSet.has(word)) {
      isPass = false;
    }

    if (beforeEnd !== '' && beforeEnd !== word[0]) {
      isPass = false;
    }

    if (!isPass) {
      answer[0] = (idx % n) + 1;
      answer[1] = Math.floor(idx / n) + 1;
      break;
    }
    wordSet.add(word);
    beforeEnd = word.slice(-1);
  }

  return answer;
}
