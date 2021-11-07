function solution(n, arr1, arr2) {
  let result = [];
  let answer = '';

  for (let i = 0; i < n; i++) {
    answer = '';
    const a = arr1[i];
    const b = arr2[i];
    const sum = a | b;

    for (let j = n - 1; j >= 0; j--) {
      if (!(sum & (1 << j))) {
        answer += ' ';
      } else {
        answer += '#';
      }
    }

    result.push(answer);
  }

  return result;
}
