function solution(wallpaper) {
  const N = wallpaper.length;
  const M = wallpaper[0].length;
  let lux = N,
    luy = M,
    rdx = 0,
    rdy = 0;

  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (wallpaper[n][m] === '#') {
        lux = Math.min(lux, n);
        rdx = Math.max(rdx, n);
        luy = Math.min(luy, m);
        rdy = Math.max(rdy, m);
      }
    }
  }

  return [lux, luy, rdx + 1, rdy + 1];
}
