function solution(k, tangerine) {
  const sizeMap = new Map();
  const N = tangerine.length;
  for (let i = 0; i < N; i++) {
    const size = tangerine[i];
    if (sizeMap.has(size)) {
      sizeMap.set(size, sizeMap.get(size) + 1);
    } else {
      sizeMap.set(size, 1);
    }
  }

  const convertSizeArr = Array.from(sizeMap).sort((a, b) => a[1] - b[1]);
  let count = tangerine.length - k;

  for (let i = 0; i < convertSizeArr.length; i++) {
    const [size, sizeCount] = convertSizeArr[i];
    if (sizeCount - count <= 0) {
      sizeMap.delete(size);
    }
    count -= sizeCount;
    if (count <= 0) {
      break;
    }
  }

  return sizeMap.size;
}
