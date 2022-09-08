function solution(s) {
  let cnt = 0;
  let removeZeroCnt = 0;

  while (s.length !== 1) {
    let oneLen = s.match(/1/g).length;
    removeZeroCnt += s.length - oneLen;
    s = oneLen.toString(2);
    cnt++;
  }

  return [cnt, removeZeroCnt];
}
