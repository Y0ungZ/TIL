'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const map = [];
const visit = [];
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];

for (let i = 0; i < N; i++) {
  const readInput = input[1 + i];
  const tempMap = [];
  const tempVisit = [];
  for (let j = 0; j < N; j++) {
    tempMap.push(readInput[j]);
    tempVisit.push(false);
  }
  map.push(tempMap);
  visit.push(tempVisit);
}

const searchArea = (visit, i, j, type) => {
  visit[i][j] = true;

  for (let d = 0; d < 4; d++) {
    let mi = i + di[d];
    let mj = j + dj[d];

    if (mi < 0 || mi >= N || mj < 0 || mj >= N) {
      continue;
    }

    if (visit[mi][mj]) {
      continue;
    }

    if (map[i][j] !== map[mi][mj]) {
      if ((map[i][j] === 'B' || map[mi][mj] === 'B') && type === 'weakness') {
        continue;
      }
      if (type === 'normal') {
        continue;
      }
    }

    if (type === 'normal') {
      searchArea(visit, mi, mj, 'normal');
    } else {
      searchArea(visit, mi, mj, 'weakness');
    }
  }
};

const normalArea = () => {
  let visitNormal = visit.map((el) => el.slice());
  let normal = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visitNormal[i][j]) {
        continue;
      }
      normal++;
      searchArea(visitNormal, i, j, 'normal');
    }
  }

  return normal;
};

const weaknessArea = () => {
  let visitWeakness = visit.map((el) => el.slice());
  let weakness = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visitWeakness[i][j]) {
        continue;
      }
      weakness++;
      searchArea(visitWeakness, i, j, 'weakness');
    }
  }
  return weakness;
};

console.log(`${normalArea()} ${weaknessArea()}`);
