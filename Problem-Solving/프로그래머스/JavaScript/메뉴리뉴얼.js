function solution(orders, course) {
  const answer = [];
  const combinationMap = new Map();
  const maxValueCourse = Array(11).fill(0);

  function getComb(menus, course) {
    const cases = [];
    if (course === 1) return menus.map((menu) => [menu]);

    menus.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getComb(rest, course - 1);
      const attached = combinations.map((comb) => [fixed, ...comb]);

      cases.push(...attached);
    });

    return cases;
  }

  orders.forEach((order) => {
    course.forEach((curr) => {
      const combinations = getComb(order.split("").sort(), curr);
      combinations.forEach((combination) => {
        if (combinationMap.has(combination.join(""))) {
          const updateCount = combinationMap.get(combination.join("")) + 1;
          combinationMap.set(combination.join(""), updateCount);
          if (maxValueCourse[curr] < updateCount) {
            maxValueCourse[curr] = updateCount;
          }
        } else {
          combinationMap.set(combination.join(""), 1);
        }
      });
    });
  });

  combinationMap.forEach((value, key, _) => {
    if (maxValueCourse[key.length] === value) {
      answer.push(key);
    }
  });

  return answer.sort();
}
