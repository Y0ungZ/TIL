function solution(s) {
  const answer = new Set();
  const array = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );

  array.forEach((row) => {
    row.forEach((element) => {
      answer.add(element);
    });
  });

  return Array.from(answer);
}
