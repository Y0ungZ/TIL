const solution = places => {
  const SeatStatus = {
    PERSON: 'P',
    EMPTY: 'O',
    PARTITION: 'X',
  };
  const answer = [];

  const calcDistance = (r1, c1, r2, c2) => {
    return Math.abs(r1 - r2) + Math.abs(c1 - c2);
  };

  // bfs
  const getVisitedRoomsInfo = (startR, startC, place, visited) => {
    const ROW = place.length;
    const COL = place[0].length;
    const queue = [];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    queue.push([startR, startC]);
    visited[startR][startC] = true;
    let idx = 0;

    while (queue.length - idx !== 0) {
      const [currR, currC] = queue[idx++];

      for (let d = 0; d < 4; d++) {
        const nextR = currR + directions[d][0];
        const nextC = currC + directions[d][1];

        if (nextR < 0 || nextR >= ROW || nextC < 0 || nextC >= COL) {
          continue;
        }
        if (calcDistance(startR, startC, nextR, nextC) > 2) {
          continue;
        }
        if (visited[nextR][nextC]) {
          continue;
        }
        if (place[nextR][nextC] === SeatStatus.PARTITION) {
          continue;
        }
        if (place[nextR][nextC] === SeatStatus.PERSON) {
          queue.push([nextR, nextC]);
          return queue;
        }

        queue.push([nextR, nextC]);
        visited[nextR][nextC] = true;
      }
    }
    return queue;
  };

  const resetVisited = (visitedInfo, visited) => {
    visitedInfo.forEach(info => {
      const [r, c] = info;
      visited[r][c] = false;
    });
  };

  const checkSafetyCompliance = place => {
    const ROW = place.length;
    const COL = place[0].length;
    const visited = Array.from({ length: ROW }, () => Array(COL).fill(false));

    for (let r = 0; r < ROW; r++) {
      for (let c = 0; c < COL; c++) {
        if (place[r][c] === SeatStatus.PERSON) {
          const visitedInfo = getVisitedRoomsInfo(r, c, place, visited);
          const [lastVisitedR, lastVisitedC] =
            visitedInfo[visitedInfo.length - 1];
          if (place[lastVisitedR][lastVisitedC] === SeatStatus.PERSON) {
            if (lastVisitedR !== r || lastVisitedC !== c) {
              return false;
            }
          }
          resetVisited(visitedInfo, visited);
        }
      }
    }
    return true;
  };

  places.forEach(place => {
    answer.push(Number(checkSafetyCompliance(place)));
  });

  return answer;
};
