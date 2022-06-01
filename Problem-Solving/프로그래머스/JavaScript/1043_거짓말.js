const init = (N) => {
  return Array(N)
    .fill(0)
    .map((value, idx) => idx);
};

const find = (x, parent) => {
  if (parent[x] === x) {
    return x;
  }
  const currentParent = find(parent[x], parent);
  parent[x] = currentParent;

  return currentParent;
};

const union = (A, B, parent) => {
  const rootA = find(A, parent);
  const rootB = find(B, parent);

  rootA < rootB ? (parent[rootB] = rootA) : (parent[rootA] = rootB);
};

const isSame = (A, B, parent) => {
  if (find(A, parent) === find(B, parent)) {
    return true;
  }
  return false;
};

const main = (function () {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const [N, M] = input[0].trim().split(' ').map(Number);

  const parent = init(N + 1);

  const truth = input[1].trim().split(' ').map(Number);

  const party = [];

  for (let m = 0; m < M; m++) {
    const currentParty = input[2 + m].trim().split(' ').map(Number);
    const first = currentParty[1];
    const temp = [];

    temp.push(first);

    for (let i = 2; i < currentParty.length; i++) {
      union(first, currentParty[i], parent);
      temp.push(currentParty[i]);
    }
    party.push(temp);
  }

  let answer = 0;

  for (let i = 0; i < party.length; i++) {
    let flag = false;

    for (let j = 0; j < party[i].length; j++) {
      for (let k = 1; k < truth.length; k++) {
        if (isSame(truth[k], party[i][j], parent)) {
          flag = true;
          break;
        }
      }
    }

    if (!flag) {
      answer++;
    }
  }

  console.log(answer);
})();
