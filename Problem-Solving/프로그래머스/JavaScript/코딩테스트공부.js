function solution(alp, cop, problems) {
  let answer_alp = 0;
  let answer_cop = 0;

  for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
    answer_alp = Math.max(answer_alp, alp_req);
    answer_cop = Math.max(answer_cop, cop_req);
  }

  const dp = Array.from({ length: answer_alp + 1 }, () => Array(answer_cop + 1).fill(301));
  const init_alp = Math.min(alp, answer_alp);
  const init_cop = Math.min(cop, answer_cop);

  dp[init_alp][init_cop] = 0;
  for (let i = init_alp; i <= answer_alp; i++) {
    for (let j = init_cop; j <= answer_cop; j++) {
      if (i + 1 <= answer_alp) {
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
      }
      if (j + 1 <= answer_cop) {
        dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);
      }

      for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        if (i >= alp_req && j >= cop_req) {
          const fix_alp = Math.min(answer_alp, i + alp_rwd);
          const fix_cop = Math.min(answer_cop, j + cop_rwd);
          dp[fix_alp][fix_cop] = Math.min(dp[i][j] + cost, dp[fix_alp][fix_cop]);
        }
      }
    }
  }

  return dp[answer_alp][answer_cop];
}
