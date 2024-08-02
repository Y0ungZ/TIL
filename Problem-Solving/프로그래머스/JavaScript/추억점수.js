function solution(name, yearning, photo) {
  const answer = [];
  const yearningMap = new Map();

  name.forEach((curr, idx) => {
    yearningMap.set(curr, yearning[idx]);
  });

  photo.forEach(currPhoto => {
    let sum = 0;
    currPhoto.map(people => {
      if (yearningMap.has(people)) {
        sum += yearningMap.get(people);
      }
    });
    answer.push(sum);
  });

  return answer;
}
