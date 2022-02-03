function fib(n) {
  /* 답안은 여기에 작성 */
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    [a, b] = [b, temp];
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
