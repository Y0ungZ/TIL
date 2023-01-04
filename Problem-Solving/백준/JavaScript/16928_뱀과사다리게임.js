const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M] = input[0].trim().split(" ").map(Number);

  const visited = Array(100).fill(false);
  const ladders = {};
  const snake = {};

  for (let i = 1; i <= N; i++) {
    const [from, to] = input[i].trim().split(" ").map(Number);
    ladders[from - 1] = to - 1;
  }

  for (let i = N + 1; i <= N + M; i++) {
    const [from, to] = input[i].trim().split(" ").map(Number);
    snake[from - 1] = to - 1;
  }

  const BFS = () => {
    const queue = [];
    queue.push([0, 0]);
    visited[0] = true;

    let index = 0;

    while (queue.length - index) {
      for (let s = 0; s < queue.length - index; s++) {
        const [count, current] = queue[index++];
        if (current === 99) {
          return count;
        }

        for (let i = 1; i <= 6; i++) {
          if (current + i >= 100) {
            continue;
          }

          if (visited[current + i]) {
            continue;
          }

          if (ladders[current + i]) {
            queue.push([count + 1, ladders[current + i]]);
            visited[current + i] = true;
            continue;
          }

          if (snake[current + i]) {
            queue.push([count + 1, snake[current + i]]);
            visited[current + i] = true;
            continue;
          }

          queue.push([count + 1, current + i]);
          visited[current + i] = true;
        }
      }
    }
  };

  console.log(BFS());
})();
