function solution(word) {
  const words = [];
  const alpha = ["A", "E", "I", "O", "U"];

  function dfs(current) {
    if (current.length === 6) {
      return;
    }

    words.push(current);

    for (let i = 0; i < 5; i++) {
      dfs(current + alpha[i]);
    }
  }

  dfs("");

  return words.indexOf(word);
}
