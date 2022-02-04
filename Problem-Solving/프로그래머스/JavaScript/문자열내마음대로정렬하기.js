function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n].localeCompare(b[n]) === 0) {
      return a.localeCompare(b);
    } else {
      return a[n].localeCompare(b[n]);
    }
  });

  return strings;
}
