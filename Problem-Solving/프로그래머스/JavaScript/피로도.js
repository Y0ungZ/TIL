function solution(k, dungeons) {
  const N = dungeons.length;
  let answer = 0;
  const selected = Array(N).fill(false);

  function dfs(current) {
    if (current < 0) {
      return;
    }

    for (let n = 0; n < N; n++) {
      const [required, consumption] = dungeons[n];
      if (selected[n]) {
        continue;
      }
      if (required > current) {
        continue;
      }
      if (consumption > current) {
        continue;
      }
      selected[n] = true;
      dfs(current - consumption);
      selected[n] = false;
    }

    let sum = 0;
    for (let n = 0; n < N; n++) {
      if (selected[n]) {
        sum++;
      }
    }
    answer = Math.max(answer, sum);
    return;
  }

  dfs(k);

  return answer;
}
