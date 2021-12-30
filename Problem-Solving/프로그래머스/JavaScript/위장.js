function solution(clothes) {
  let answer = 1;
  const map = new Map();

  for (let i = 0; i < clothes.length; i++) {
    const [name, type] = clothes[i];

    if (map.has(type)) {
      let plus = map.get(type) + 1;
      map.set(type, plus);
    } else {
      map.set(type, 1);
    }
  }

  for (let value of map.values()) {
    answer *= value + 1;
  }
  return answer - 1;
}
