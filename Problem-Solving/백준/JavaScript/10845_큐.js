"use strict";

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const N = Number(input[0]);
const commandList = input.slice(1);

class Queue{
    constructor() {
        this.array = [];
        this.head = 0;
        this.tail = 0;
    }

    push(value) {
        this.array.push(value);
        this.tail++;
    }

    pop() {
        if (this.array.length === 0) {
            return -1;
        }
        this.tail--;
        return this.array.shift();
    }

    front() {
        if (this.array.length === 0) {
            return -1;
        }
        return this.array[this.head];
    }

    back() {
        if (this.array.length === 0) {
            return -1;
        }
        return this.array[this.tail-1];
    }

    empty() {
        if (this.array.length === 0) {
            return true;
        }
        return false;
    }

    size() {
        return this.array.length;
    }

}

let queue = new Queue();
let currentIndex = 0;
let answer = '';

for (let i = 0; i < N; i++){
    switch (commandList[currentIndex++]) {
        case 'push':
            queue.push(Number(commandList[currentIndex++]));
            break;
        case 'pop':
            answer+=`${queue.pop()}\n`;
            break;
        case 'size':
            answer+=`${queue.size()}\n`;
            break;
        case 'empty':
            if (queue.empty()) {
                answer+=`1\n`;
            } else {
                answer+=`0\n`;
            }
            break;
        case 'front':
            answer+=`${queue.front()}\n`;
            break;
        case 'back':
            answer+=`${queue.back()}\n`;
            break;
        default:
            break;
    }
}

console.log(answer);
