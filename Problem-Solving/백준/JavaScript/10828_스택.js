"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const N = Number(input[0]);
const commandList = input.slice(1);

class Stack{
    constructor() {
        this.array = [];
        this.top = 0;
    }

    push(value) {
        this.array.push(value);
        this.top++;
    }

    pop() {
        if (this.array.length === 0) {
            return -1;
        }
        this.top--;
        return this.array.pop();
    }

    peek() {
        if (this.array.length === 0) {
            return -1;
        }
        return this.array[this.top-1];
    }

    empty() {
        if (this.array.length === 0) {
            return true;
        }
        return false;
    }

    size() {
        return this.top;
    }

}

let stack = new Stack();
let currentIndex = 0;
let answer = '';

for (let i = 0; i < N; i++){
    switch (commandList[currentIndex++]) {
        case 'push':
            stack.push(Number(commandList[currentIndex++]));
            break;
        case 'pop':
            answer+=`${stack.pop()}\n`;
            break;
        case 'size':
            answer+=`${stack.size()}\n`;
            break;
        case 'empty':
            if (stack.empty()) {
                answer+=`1\n`;
            } else {
                answer+=`0\n`;
            }
            break;
        case 'top':
            answer+=`${stack.peek()}\n`;
            break;
        default:
            break;
    }
}

console.log(answer);
