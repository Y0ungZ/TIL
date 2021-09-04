const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const reg = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
let result = input.replace(reg,'.');

console.log(result.length);