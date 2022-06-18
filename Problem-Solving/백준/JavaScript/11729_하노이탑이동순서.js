const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const N = +fs.readFileSync(filePath).toString().trim();
    const answer = [];
    
    const print = (start, to) => {
        answer.push(`${start} ${to}`);
    }

    const hanoi = (N, start, to, pass) => {
        if (N === 1) {
            print(start, to);
            return;
        }
        
        hanoi(N - 1, start, pass, to);
        print(start, to);
        hanoi(N - 1, pass,to,start);
    };
    
    hanoi(N, 1, 3, 2);

  console.log(answer.length);
  console.log(answer.join("\n"));
})();
