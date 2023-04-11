function solution(commands) {
  const STR_EMPTY = "EMPTY";
  const STR_UPDATE = "UPDATE";
  const STR_MERGE = "MERGE";
  const STR_UNMERGE = "UNMERGE";
  const STR_PRINT = "PRINT";
  const R = 51;
  const C = 51;
  const table = Array.from({ length: R }, () => Array.from({ length: C }, () => ["", undefined]));
  const answer = [];

  const getKey = (i, j) => {
    return `0${i}0${j}`;
  };

  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      table[i][j][1] = getKey(i, j);
    }
  }

  const merging = (r1, c1, r2, c2) => {
    if (Math.abs(r1 - r2) + Math.abs(c1 - c2) === 0) {
      return;
    }

    let value = "";
    const R1C1Key = table[r1][c1][1];
    const R2C2Key = table[r2][c2][1];

    if (table[r2][c2][0] !== "") {
      value = table[r2][c2][0];
    }

    if (table[r1][c1][0] !== "") {
      value = table[r1][c1][0];
    }

    for (let i = 1; i < R; i++) {
      for (let j = 1; j < C; j++) {
        if (table[i][j][1] === R1C1Key) {
          table[i][j][0] = value;
        }
        if (table[i][j][1] === R2C2Key) {
          table[i][j][0] = value;
          table[i][j][1] = R1C1Key;
        }
      }
    }
  };

  commands.forEach((command) => {
    const [keyword, ...orders] = command.split(" ");

    switch (keyword) {
      case STR_UPDATE:
        if (orders.length === 3) {
          const [r, c, value] = orders;
          const mergeKey = table[r][c][1];

          for (let i = 1; i < R; i++) {
            for (let j = 1; j < C; j++) {
              if (table[i][j][1] === mergeKey) {
                table[i][j][0] = value;
              }
            }
          }

          table[+r][+c][0] = value;
        } else {
          const [value1, value2] = orders;
          for (let i = 1; i < R; i++) {
            for (let j = 1; j < C; j++) {
              if (table[i][j][0] === value1) {
                table[i][j][0] = value2;
              }
            }
          }
        }
        break;
      case STR_MERGE:
        const [r1, c1, r2, c2] = orders.map((order) => Number(order));
        merging(r1, c1, r2, c2);
        break;
      case STR_UNMERGE:
        const [r, c] = orders.map((order) => Number(order));
        const mergeKey = table[r][c][1];
        const mergeValue = table[r][c][0];

        for (let i = 1; i < R; i++) {
          for (let j = 1; j < C; j++) {
            if (table[i][j][1] === mergeKey) {
              table[i][j][0] = "";
              table[i][j][1] = getKey(i, j);
            }
          }
        }
        table[r][c][0] = mergeValue;
        break;
      case STR_PRINT:
        const [printR, printC] = orders.map((order) => Number(order));
        if (table[printR][printC][0] === "") {
          answer.push(STR_EMPTY);
        } else {
          answer.push(table[printR][printC][0]);
        }
        break;
      default:
        break;
    }
  });

  return answer;
}
