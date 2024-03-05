function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  let answer = words.length;

  const isDifferenceOneAlphabet = (curr, match) => {
    if (curr.length !== match.length) {
      return false;
    }

    let count = 0;

    for (let i = 0; i < curr.length; i++) {
      if (curr[i] !== match[i]) {
        count++;
      }

      if (count > 1) {
        return false;
      }
    }

    return true;
  };

  const dfs = (curr, depth, visited) => {
    if (curr === target) {
      answer = Math.min(depth, answer);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (visited[i]) {
        continue;
      }

      if (isDifferenceOneAlphabet(curr, words[i])) {
        visited[i] = true;
        dfs(words[i], depth + 1, visited);
        visited[i] = false;
      }
    }
  };

  dfs(begin, 0, Array(words.length).fill(false));
  return answer;
}
