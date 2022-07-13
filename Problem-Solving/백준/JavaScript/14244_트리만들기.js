const main = (function () {
    const fs = require('fs');
    const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
    const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

    const trees = {};

    for (let i = 0; i < N; i++){
        trees[i] = [];
    }

    let connectNode = 0;
    let lastNode = 0;

    for (let i = 1; i < N; i++){
        if (connectNode === M) {
            trees[lastNode].push(i);
            lastNode = i;
        } else {
            trees[0].push(i);
            lastNode = i;
            connectNode++;
        }
    }

    const answer = [];

    for (let i = 0; i < N; i++){
        const childNodes = trees[i];

        for (let j = 0; j < childNodes.length; j++){
            answer.push(`${i} ${childNodes[j]}`);
        }
    }


    console.log(answer.join('\n'));
})();