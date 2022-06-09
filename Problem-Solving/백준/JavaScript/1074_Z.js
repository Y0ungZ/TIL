const main = (function () {
    const fs = require("fs");
    const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
    const [N, R, C] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
    const POWER_NUM = Math.pow(2, N);

    let answer = 0;

    function makeZ(row, col, length, count) {
        if (length === 2) {
            for (let i = row; i < row + 2; i++){
                for (let j = col; j < col + 2; j++){
                    if (i === R && j === C) {
                        answer = count;
                        return;
                    }
                    count++;
                }
            }
            return;
        }

        const middle = Math.floor(length / 2);

        if (row <= R && R < row + middle && col <= C && C < col + middle) {
            makeZ(row, col, middle, count);
        } else if (row <= R && R < row + middle && col+middle <= C && C < col + length) {
            makeZ(row, col+middle, middle, count + (middle * middle));
        } else if (row+middle <= R && R < row + length && col <= C && C < col + middle) {
            makeZ(row+middle, col, middle, count + (middle * middle*2));
        } else {
            makeZ(row + middle, col + middle, middle, count + (middle*middle*3));
        }

        
    }
  
    makeZ(0,0,POWER_NUM,0);

    console.log(answer);
    
  })();
  