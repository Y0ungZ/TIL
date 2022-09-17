function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^[\.]|[\.]$/, "")
    .replace(/^$/, "a")
    .substring(0, 15)
    .replace(/[\.]$/, "");

  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }

  return answer;
}
