const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
  const visit = Array(100001).fill(false);
  const MAX_VALUE = 100000;

  function bfs() {
    const queue = [];
    queue.push(N);
    visit[N] = true;
    let index = 0;
    let time = 0;

    while (true) {
      const size = queue.length - index;

      if (size === 0) {
        break;
      }

      for (let s = 0; s < size; s++) {
        const current = queue[index++];

        if (current === M) {
          return time;
        }

        const workForward = current + 1;

        if (workForward <= MAX_VALUE && !visit[workForward]) {
          queue.push(workForward);
          visit[workForward] = true;
        }

        const workBackward = current - 1;

        if (workBackward >= 0 && !visit[workBackward]) {
          queue.push(workBackward);
          visit[workBackward] = true;
        }

        const teleportation = current * 2;

        if (teleportation <= MAX_VALUE && !visit[teleportation]) {
          queue.push(teleportation);
          visit[teleportation] = true;
        }
      }

      time++;
    }
  }

  console.log(bfs());
})();
