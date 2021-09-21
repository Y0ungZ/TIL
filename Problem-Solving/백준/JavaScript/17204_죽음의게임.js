'use strict';

const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N,K] = input[0].trim().split(' ').map((num)=>Number(num));
input = input.splice(1).map((num)=>Number(num));

const nominate = [];
const visit = [];

for (let i = 0; i < N; i++){
    nominate.push(Number(input[i]));
    visit.push(false);
}//end initial setting

const theGameofDeath = (current,num) => {
    if (visit[current]) {
        console.log(-1);
        return;
    }

    visit[current] = true;

    if (nominate[current] === K) {
        console.log(num);
        return;
    }

    theGameofDeath(nominate[current], num + 1);

}

theGameofDeath(0, 1);
