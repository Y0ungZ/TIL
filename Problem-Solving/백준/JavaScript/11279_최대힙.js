'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0].trim());

class MaxHeap {
  constructor() {
    this.items = [];
  }

  parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  leftChild(idx) {
    return idx * 2 + 1;
  }

  rightChild(idx) {
    return idx * 2 + 2;
  }

  isLeaf(idx) {
    return idx >= Math.floor(this.items.length / 2) && idx <= this.items.length - 1;
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  heapifyUp(idx) {
    let currentIdx = idx,
      parentIdx = this.parent(idx);

    while (currentIdx > 0 && this.items[currentIdx] > this.items[parentIdx]) {
      this.swap(currentIdx, parentIdx);

      currentIdx = parentIdx;
      parentIdx = this.parent(parentIdx);
    }
  }

  add(value) {
    this.items.push(value);
    this.heapifyUp(this.items.length - 1);
  }

  heapifyDown(idx) {
    if (!this.isLeaf(idx)) {
      let leftChildIdx = this.leftChild(idx),
        rightChildIdx = this.rightChild(idx),
        largestIdx = idx;

      if (this.items[leftChildIdx] > this.items[largestIdx]) {
        largestIdx = leftChildIdx;
      }

      if (this.items[rightChildIdx] > this.items[largestIdx]) {
        largestIdx = rightChildIdx;
      }

      if (largestIdx !== idx) {
        this.swap(idx, largestIdx);
        this.heapifyDown(largestIdx);
      }
    }
  }

  extractMax() {
    const max = this.items[0];

    if (this.items.length === 1) {
      this.items.pop();
      return max;
    }

    this.items[0] = this.items.pop();

    this.heapifyDown(0);
    return max;
  }

  buildHeap(array) {
    this.items = array;

    for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  peek() {
    return this.items[0];
  }
}

const heap = new MaxHeap();
let result = '';
for (let i = 0; i < N; i++) {
  const order = Number(input[1 + i].trim());

  if (order > 0) {
    heap.add(order);
  } else {
    if (heap.items.length === 0) {
      result += `0\n`;
    } else {
      result += `${heap.extractMax()}\n`;
    }
  }
}
console.log(result);
