function solution(x, y, n) {
  const calculation1 = (number, operand) => {
    return number - operand;
  };

  const calculation2 = number => {
    return number / 2;
  };

  const calculation3 = number => {
    return number / 3;
  };

  const bfs = y => {
    const queue = [];
    queue.push([y, 0]);

    const visited = new Set();
    visited.add(y);

    let idx = 0;

    while (queue.length - idx !== 0) {
      const [num, count] = queue[idx++];

      if (num === x) {
        return count;
      }

      if (num < x) {
        continue;
      }

      const result1 = calculation1(num, n);
      const result2 = calculation2(num);
      const result3 = calculation3(num);

      if (!visited.has(result1) && Number.isInteger(result1)) {
        queue.push([result1, count + 1]);
        visited.add(result1);
      }
      if (!visited.has(result2) && Number.isInteger(result2)) {
        queue.push([result2, count + 1]);
        visited.add(result2);
      }
      if (!visited.has(result3) && Number.isInteger(result3)) {
        queue.push([result3, count + 1]);
        visited.add(result3);
      }
    }

    return -1;
  };

  return bfs(y);
}
