'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIdx) => parentIdx * 2 + 1;
  getRightChildIndex = (parentIdx) => parentIdx * 2 + 2;
  getParentIndex = (childIdx) => Math.floor((childIdx - 1) / 2);

  peek = () => this.heap[0];

  insert = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIdx = this.getParentIndex(index);

      if (this.heap[parentIdx] > Math.abs(lastInsertedNode)) {
        this.heap[index] = this.heap[parentIdx];
        index = parentIdx;
      } else {
        break;
      }
    }

    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }
    return rootNode;
  };

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIdx = this.getLeftChildIndex(index);
      const rightChildIdx = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIdx < count &&
        Math.abs(this.heap[rightChildIdx]) < Math.abs(this.heap[leftChildIdx])
          ? rightChildIdx
          : leftChildIdx;

      if (this.heap[smallerChildIndex] <= rootNode) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else {
        break;
      }
    }
    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (value) => this.insert(value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

const positiveQueue = new PriorityQueue();
const negativeQueue = new PriorityQueue();
let result = '';
for (let i = 0; i < N; i++) {
  const current = Number(input[1 + i].trim());
  if (current > 0) {
    positiveQueue.enqueue(current);
  } else if (current < 0) {
    negativeQueue.enqueue(current * -1);
  } else {
    if (positiveQueue.isEmpty() && negativeQueue.isEmpty()) {
      result += '0\n';
    } else if (positiveQueue.isEmpty()) {
      result += `-${negativeQueue.dequeue()}\n`;
    } else if (negativeQueue.isEmpty()) {
      result += `${positiveQueue.dequeue()}\n`;
    } else {
      let positiveTop = positiveQueue.peek();
      let negativeTop = negativeQueue.peek();

      if (positiveTop < negativeTop) {
        result += `${positiveQueue.dequeue()}\n`;
      } else {
        result += `-${negativeQueue.dequeue()}\n`;
      }
    }
  }
}
console.log(result);
