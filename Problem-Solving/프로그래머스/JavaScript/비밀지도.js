function solution(n, arr1, arr2) {
  const answer = [];

  arr1.forEach((_, idx) => {
    const mapRow = (arr1[idx] | arr2[idx]).toString(2);
    let answerRow = "";
    const colDiff = n - mapRow.length;

    for (let i = 0; i < colDiff; i++) {
      answerRow += " ";
    }

    for (let i = 0; i < mapRow.length; i++) {
      +mapRow[i] ? (answerRow += "#") : (answerRow += " ");
    }
    answer.push(answerRow);
  });

  return answer;
}
