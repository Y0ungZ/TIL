function solution(name) {
  const A_CODE = 65;
  const Z_CODE = 91 - A_CODE;
  const names = name.split('').map(word => word.charCodeAt(0) - A_CODE);
  let cursor = 0;
  let wordChangeCount = 0;
  let cursorChangeCount = names.length - 1;

  for (let i = 0; i < name.length; i++) {
    wordChangeCount += Math.min(names[i], Z_CODE - names[i]);
    cursor = i + 1;

    // 연속 A 찾기
    while (cursor < name.length && name[cursor] === 'A') {
      cursor += 1;
    }

    const minDistance = Math.min(i, names.length - cursor);
    cursorChangeCount = Math.min(
      cursorChangeCount,
      i + (names.length - cursor) + minDistance,
    );
  }

  return wordChangeCount + cursorChangeCount;
}
