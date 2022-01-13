function solution(sizes) {
  sizes.sort((a, b) => b[0] - a[0]);

  let w = sizes[0][0];
  let h = sizes[0][1];

  for (let i = 1; i < sizes.length; i++) {
    if (Math.abs(w - sizes[i][0]) > Math.abs(w - sizes[i][1])) {
      if (w < sizes[i][1]) {
        w = sizes[i][1];
      }
      if (h < sizes[i][0]) {
        h = sizes[i][0];
      }
    } else {
      if (w < sizes[i][0]) {
        w = sizes[i][0];
      }
      if (h < sizes[i][1]) {
        h = sizes[i][1];
      }
    }
  }

  return w * h;
}
