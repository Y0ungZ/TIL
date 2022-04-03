function solution(places) {
  let answer = [];
  const ROW = 5;
  const COLUMN = 5;
  const ROOMS = 5;

  for (let i = 0; i < ROOMS; i++) {
    const currentRoom = places[i];
    const map = [];
    const people = [];
    for (let j = 0; j < ROW; j++) {
      const temp = currentRoom[j];
      for (let k = 0; k < COLUMN; k++) {
        if (temp[k] === 'P') {
          people.push([j, k]);
        }
      }
      map.push(temp.split(''));
    }
    answer.push(isOK(people, map, 5));
  }

  return answer;
}
function calcDistance(r1, r2, c1, c2) {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
}
function isOK(people, map, N) {
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];

  for (let i = 0; i < people.length; i++) {
    const [pi, pj] = people[i];
    const visit = Array.from({ length: N }, () => Array(N).fill(false));
    const queue = [];
    let idx = 0;
    let flag = true;

    queue.push([pi, pj]);
    visit[pi][pj] = true;

    while (true) {
      if (queue.length - idx === 0) {
        break;
      }

      const [i, j] = queue[idx++];

      for (let d = 0; d < 4; d++) {
        const moveI = i + di[d];
        const moveJ = j + dj[d];

        if (moveI < 0 || moveJ < 0 || moveI >= N || moveJ >= N) {
          continue;
        }

        if (calcDistance(pi, moveI, pj, moveJ) > 2) {
          continue;
        }

        if (visit[moveI][moveJ]) {
          continue;
        }

        if (map[moveI][moveJ] === 'P') {
          flag = false;
          break;
        } else if (map[moveI][moveJ] === 'O') {
          queue.push([moveI, moveJ]);
          visit[moveI][moveJ] = true;
        }
      }
    }

    if (!flag) {
      return 0;
    }
  }

  return 1;
}
