// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(a, b) {
  for (let i = 0; i < b - 1; i++) {
    a *= a;
  }
  return a;
}

console.log(pow(3, 3));
