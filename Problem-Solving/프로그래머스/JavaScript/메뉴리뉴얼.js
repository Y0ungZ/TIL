const makeMenu = (arr, selectNum) => {
  const results = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const making = makeMenu(rest, selectNum - 1);
    const attached = making.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const solution = (orders, course) => {
  let answer = [];
  let menus = new Map();
  let maxValue = Array.from({ length: 11 }, () => 0);

  for (let i = 0; i < orders.length; i++) {
    let current = orders[i].split('').sort();
    for (let j = 0; j < course.length; j++) {
      const result = makeMenu(current, course[j]);
      for (let k = 0; k < result.length; k++) {
        const temp = result[k].join('');
        if (menus.has(temp)) {
          let count = menus.get(temp);
          count++;
          if (maxValue[course[j]] < count) {
            maxValue[course[j]] = count;
          }
          menus.set(temp, count);
        } else {
          menus.set(temp, 1);
        }
      }
    }
  }

  menus.forEach((value, key, map) => {
    if (maxValue[key.length] === value) {
      answer.push(key);
    }
  });

  return answer.sort();
};
