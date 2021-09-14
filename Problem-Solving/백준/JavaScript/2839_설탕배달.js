"use strict";

const fs = require('fs');

let input = Number(fs.readFileSync('/dev/stdin').toString().trim());
let bag = 0;

while (true) {
    if (input % 5 === 0) {
        bag += input / 5;
        break;
    }

    input -= 3;
    bag++;

    if (input === 0) {
        break;
    }

    if (input < 0) {
        bag = -1;
        break;
    }
}
console.log(bag);