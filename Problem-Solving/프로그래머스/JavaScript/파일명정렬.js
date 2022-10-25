function solution(files) {
  const answer = [];
  const splitFileArr = [];

  files.forEach((file, idx) => {
    const tempArr = [];
    tempArr.push(file.split(/\d/)[0]);
    tempArr.push(file.match(/\d+/)[0]);
    tempArr.push(idx);
    splitFileArr.push(tempArr);
  });

  splitFileArr
    .sort(function (a, b) {
      const headA = a[0].toLowerCase();
      const headB = b[0].toLowerCase();

      if (headA > headB) {
        return 1;
      }

      if (headA < headB) {
        return -1;
      }

      return +a[1] - +b[1];
    })
    .map((el) => {
      answer.push(files[el[2]]);
    });

  return answer;
}
