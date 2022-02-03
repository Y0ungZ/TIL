//for반복문
const usingFor = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//재귀사용
const usingRec = (n) => {
  if (n === 1) {
    return 1;
  }

  return n + usingRec(n - 1);
};

//등차수열 공식
const usingDef = (n) => {
  return Math.floor((n * (n + 1)) / 2);
};

console.log(usingFor(100));
console.log(usingRec(100));
console.log(usingDef(100));
