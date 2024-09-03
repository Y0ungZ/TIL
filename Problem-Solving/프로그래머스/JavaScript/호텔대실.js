function solution(bookTime) {
  const answer = [];

  const convertMinuteTime = ([hh, mm]) => {
    return hh * 60 + mm;
  };

  const bookMinuteTime = bookTime.map(arr => {
    const [inTime, outTime] = arr;
    return [
      convertMinuteTime(inTime.split(':').map(Number)),
      convertMinuteTime(outTime.split(':').map(Number)),
    ];
  });

  bookMinuteTime.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  bookMinuteTime.forEach(time => {
    const [inTime, outTime] = time;
    let changeFlag = false;

    for (let index = 0; index < answer.length; index++) {
      if (answer[index] <= inTime) {
        answer[index] = outTime + 10;
        changeFlag = true;
        break;
      }
    }

    if (!changeFlag) {
      answer.push(outTime + 10);
    }
    answer.sort((a, b) => a - b);
  });

  return answer.length;
}
