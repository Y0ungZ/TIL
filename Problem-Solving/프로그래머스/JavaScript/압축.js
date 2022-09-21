function solution(msg) {
  const answer = [];
  const indexMap = new Map();
  let lastIndex = 27;

  for (let i = 1; i < lastIndex; i++) {
    indexMap.set(String.fromCharCode(64 + i), i);
  }

  for (let i = 0; i < msg.length; ) {
    let w = msg[i];
    let cIdx = i + 1;

    for (let j = i + 1; j < msg.length; j++) {
      let nextChar = msg[j];
      if (indexMap.has(w + nextChar)) {
        w += nextChar;
        cIdx = j + 1;
      } else {
        break;
      }
    }

    let c = "";

    if (cIdx < msg.length) {
      c = msg[cIdx];
    }

    if (indexMap.has(w)) {
      answer.push(indexMap.get(w));
      if (!indexMap.has(w + c)) {
        indexMap.set(w + c, lastIndex++);
      }
    }

    i = cIdx;
  }

  return answer;
}
