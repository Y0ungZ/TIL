function gcd(n, m) {
  if (m === 0) {
    return n;
  }
  return gcd(m, n % m);
}

function lcm(n, m) {
  return (n * m) / gcd(n, m);
}

function solution(n, m) {
  let answer = [];

  answer.push(gcd(n, m), lcm(n, m));

  return answer;
}
