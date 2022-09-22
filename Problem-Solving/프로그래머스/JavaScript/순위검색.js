function solution(info, query) {
  const answer = [];
  const infoRecords = {};

  function combString(index, arr, score) {
    const key = arr.join("");

    infoRecords[key] ? infoRecords[key].push(score) : (infoRecords[key] = [score]);

    for (let i = index; i < arr.length; i++) {
      const temp = [...arr];
      temp[i] = "-";
      combString(i + 1, temp, score);
    }
  }

  info.forEach((applicant) => {
    const [language, job, career, soulfood, score] = applicant.split(" ");

    combString(0, [language, job, career, soulfood], +score);
  });

  for (const [key, _] of Object.entries(infoRecords)) {
    infoRecords[key].sort((a, b) => a - b);
  }

  query.forEach((question) => {
    const [language, job, career, soulfood, score] = question.replace(/\sand\s/g, " ").split(" ");

    const key = language + job + career + soulfood;
    const scores = infoRecords[key];

    if (!scores) {
      answer.push(0);
      return;
    }

    let left = 0,
      right = scores.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (scores[mid] >= +score) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    answer.push(scores.length - left);
  });

  return answer;
}
