const printCase = (T, n) => {
  let result = `Case ${T}: `;

  if (n > 1) {
    result += `A forest of ${n} trees.`;
  } else if (n === 1) {
    result += `There is one tree.`;
  } else {
    result += `No trees.`;
  }

  return result;
};

const initParents = (N) => {
  return Array(N)
    .fill(0)
    .map((value, idx) => idx);
};

const findParents = (parents, x) => {
  if (parents[x] === x) {
    return x;
  } else {
    const currentParent = findParents(parents, parents[x]);
    parents[x] = currentParent;
    return currentParent;
  }
};

const union = (parents, A, B) => {
  const parentA = findParents(parents, A);
  const parentB = findParents(parents, B);

  let small = parentA < parentB ? parentA : parentB;
  let big = parentA > parentB ? parentA : parentB;

  if (small === big) {
    parents[small] = 0;
  } else {
    parents[big] = small;
  }
};

const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  let index = 0;
  const answer = [];
  let test = 1;

  while (true) {
    const [N, M] = input[index++].trim().split(" ").map(Number);

    if (N === 0 && M === 0) {
      break;
    }

    const parents = initParents(N + 1);

    for (let m = 0; m < M; m++) {
      const [A, B] = input[index++].trim().split(" ").map(Number);
      union(parents, A, B);
    }

    const set = new Set();

    for (let n = 1; n <= N; n++) {
      if (findParents(parents, n) > 0) {
        set.add(parents[n]);
      }
    }
    answer.push(printCase(test++, set.size));
  }

  console.log(answer.join("\n"));
})();
