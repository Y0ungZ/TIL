const solution = relation => {
  const ROW = relation.length;
  const COLUMN = relation[0].length;
  const columns = Array.from({ length: COLUMN }, () => []);

  relation.forEach(tuple => {
    tuple.forEach((column, idx) => columns[idx].push(column));
  });

  const keys = [];

  const verifyUniqueness = testKey => {
    const keySet = new Set();

    relation.forEach(tuple => {
      keySet.add(testKey.map(idx => tuple[idx]).join(' '));
    });

    if (keySet.size === ROW) {
      return true;
    }
    return false;
  };

  const verifyMinimality = testKey => {
    for (const key of keys) {
      if (key.every(attribute => testKey.includes(attribute))) {
        return false;
      }
    }
    return true;
  };

  const getComb = (n, r, startIdx, selected) => {
    if (n === r) {
      const key = selected
        .map((select, idx) => (select ? idx : -1))
        .filter(idx => idx !== -1);
      if (verifyUniqueness(key) && verifyMinimality(key)) {
        keys.push(key);
      }
      return;
    }
    for (let i = startIdx; i < COLUMN; i++) {
      selected[i] = true;
      getComb(n + 1, r, i + 1, selected);
      selected[i] = false;
    }
  };

  for (let c = 1; c <= COLUMN; c++) {
    getComb(0, c, 0, Array(COLUMN).fill(false));
  }

  return keys.length;
};
