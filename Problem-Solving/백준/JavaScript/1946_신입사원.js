const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const T = +input[0];
  let index = 1;
  const answer = [];

  for (let t = 0; t < T; t++) {
    const N = +input[index];
    const applicant = [];
    let count = 0;

    for (let n = index + 1; n <= index + N; n++) {
      applicant.push(input[n].split(" ").map(Number));
    }

    applicant.sort((a, b) => a[0] - b[0]);
    let interviewPeak = applicant[0][1];

    applicant.forEach((curr) => {
      if (curr[1] === interviewPeak) {
        // 1위일 때
        count++;
      }
      if (interviewPeak > curr[1]) {
        count++;
        interviewPeak = curr[1];
      }
    });

    answer.push(count);
    index += N + 1;
  }

  console.log(answer.join("\n"));
})();
