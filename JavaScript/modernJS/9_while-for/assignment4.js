let n = +prompt('숫자를 입력해주세요.', '');

let temp = 0;
let prime = Array.from({ length: n + 1 }, () => true);

for (let i = 2; i <= n; i++) {
  if (!prime[i]) {
    continue;
  }

  for (let j = 2 * i; j <= n; j += i) {
    prime[j] = false;
  }
}

let answer = '';
for (let i = 2; i <= n; i++) {
  if (prime[i]) {
    answer += `${i} `;
  }
}

console.log(answer);
