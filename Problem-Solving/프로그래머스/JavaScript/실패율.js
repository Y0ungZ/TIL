function solution(N, stages) {
  let answer = [];
  let situation = Array.from({ length: N + 2 }, () => 0);
  let current = stages.length;
  let failure = [];

  stages.forEach((stage) => {
    situation[stage]++;
  });

  for (let i = 0; i < N; i++) {
    failure.push([i + 1, situation[i + 1] / current]);
    current -= situation[i + 1];
  }

  failure.sort((a, b) => b[1] - a[1]);

  failure.forEach((fail) => {
    answer.push(fail[0]);
  });

  return answer;
}
