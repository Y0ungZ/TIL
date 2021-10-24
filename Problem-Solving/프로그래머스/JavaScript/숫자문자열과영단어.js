function solution(s) {
  s = s
    .replace(/one/gm, '1')
    .replace(/two/gm, '2')
    .replace(/three/gm, '3')
    .replace(/four/gm, '4')
    .replace(/five/gm, '5')
    .replace(/six/gm, '6')
    .replace(/seven/gm, '7')
    .replace(/eight/gm, '8')
    .replace(/nine/gm, '9')
    .replace(/zero/gm, '0');

  return Number(s);
}
