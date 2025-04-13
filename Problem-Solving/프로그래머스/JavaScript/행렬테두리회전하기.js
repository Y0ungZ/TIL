function solution(rows, columns, queries) {
  const answer = [];

  const matrix = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 1; c <= columns; c++) {
      row.push(r * columns + c);
    }
    matrix.push(row);
  }

  queries.forEach(query => {
    const [startR, startC, endR, endC] = query.map(el => el - 1);

    // execute
    const orders = [];
    for (let c = startC; c <= endC; c++) {
      orders.push(matrix[startR][c]);
    }
    for (let r = startR + 1; r <= endR; r++) {
      orders.push(matrix[r][endC]);
    }
    for (let c = endC - 1; c >= startC; c--) {
      orders.push(matrix[endR][c]);
    }
    for (let r = endR - 1; r > startR; r--) {
      orders.push(matrix[r][startC]);
    }
    answer.push(Math.min(...orders));

    // update
    let idx = 0;
    for (let c = startC + 1; c <= endC; c++) {
      matrix[startR][c] = orders[idx++];
    }
    for (let r = startR + 1; r <= endR; r++) {
      matrix[r][endC] = orders[idx++];
    }
    for (let c = endC - 1; c >= startC; c--) {
      matrix[endR][c] = orders[idx++];
    }
    for (let r = endR - 1; r > startR; r--) {
      matrix[r][startC] = orders[idx++];
    }
    matrix[startR][startC] = orders[idx++];
  });

  return answer;
}
