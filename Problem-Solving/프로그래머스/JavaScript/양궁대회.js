let max = 0;

function solution(n, info) {
  const select = Array(11).fill(0);
  const resultMap = new Map();

  makeComb(n, 0, 0, select, info, resultMap);

  const resultArray = Array.from(resultMap).sort((a, b) => b[0] - a[0]);
  const maxArray = resultArray[0];
  if (maxArray) {
    let answer = maxArray[1];

    for (let i = 0; i < answer.length; i++) {
      answer[i] = answer[i].split('').reverse().join('');
    }

    answer.sort((a, b) => +b - +a);
    return answer[0].split('').reverse().map(Number);
  } else {
    return [-1];
  }
}

function makeComb(n, idx, cnt, select, info, resultMap) {
  if (cnt === n) {
    let score = calcScore(info, select);
    if (score > 0) {
      if (resultMap.has(score)) {
        const list = resultMap.get(score);

        list.push(select.join(''));
        resultMap.set(score, list);
      } else {
        resultMap.set(score, [select.join('')]);
      }
    }

    return;
  }
  if (idx > 10) {
    return;
  }
  if (cnt > n) {
    return;
  }
  if (select[idx] != 0) {
    return;
  }

  if (n >= cnt + info[idx] + 1) {
    select[idx] = info[idx] + 1;
    makeComb(n, idx + 1, cnt + select[idx], select, info, resultMap);
  } else {
    select[idx] = n - cnt;
    makeComb(n, idx + 1, cnt + select[idx], select, info, resultMap);
  }

  select[idx] = 0;
  makeComb(n, idx + 1, cnt, select, info, resultMap);
}

function calcScore(info, select) {
  const SCORE = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let apeach = 0;
  let lion = 0;
  for (let i = 0; i < 11; i++) {
    if (info[i] != 0 && info[i] >= select[i]) {
      apeach += SCORE[i];
    } else if (info[i] < select[i]) {
      lion += SCORE[i];
    }
  }

  let sum = lion - apeach;

  if (max < sum) {
    max = sum;
  }

  return sum;
}
