const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const N = +fs.readFileSync(filePath).toString().trim();

  const MooGame = (k, len, curLen) => {
    const tempLen = Math.floor((len - k - 3) / 2);
    if (curLen <= tempLen) {
      return MooGame(k - 1, tempLen, curLen);
    } else if (curLen > tempLen + k + 3) {
      return MooGame(k - 1, tempLen, curLen - tempLen - k - 3);
    } else {
      return tempLen + 1 === curLen ? "m" : "o";
    }
  };

  let targetK = 0,
    calcLength = 3;

  while (N >= calcLength) {
    targetK++;
    calcLength = calcLength * 2 + targetK + 3;
  }

  console.log(MooGame(targetK, calcLength, N));
})();
