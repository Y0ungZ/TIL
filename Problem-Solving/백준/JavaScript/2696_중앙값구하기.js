'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0].trim());
let index = 1;

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIdx) => parentIdx * 2 + 1;
  getRightChildIndex = (parentIdx) => parentIdx * 2 + 2;
  getParentIndex = (childIdx) => Math.floor((childIdx - 1) / 2);

  peek = () => this.heap[0];
  size = () => this.heap.length;
}

class MinHeap extends Heap {
  insert = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  heapifyUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIdx = this.getParentIndex(index);

      if (this.heap[parentIdx] > lastInsertedNode) {
        this.heap[index] = this.heap[parentIdx];
        index = parentIdx;
      } else {
        break;
      }
    }

    this.heap[index] = lastInsertedNode;
  }

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

  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIdx = this.getLeftChildIndex(index);
      const rightChildIdx = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIdx < count && this.heap[rightChildIdx] < this.heap[leftChildIdx]
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
  }
}

class MaxHeap extends MinHeap {
  heapifyUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIdx = this.getParentIndex(index);

      if (this.heap[parentIdx] < lastInsertedNode) {
        this.heap[index] = this.heap[parentIdx];
        index = parentIdx;
      } else {
        break;
      }
    }

    this.heap[index] = lastInsertedNode;
  }
  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIdx = this.getLeftChildIndex(index);
      const rightChildIdx = this.getRightChildIndex(index);

      const largetChildIndex =
        rightChildIdx < count && this.heap[rightChildIdx] > this.heap[leftChildIdx]
          ? rightChildIdx
          : leftChildIdx;

      if (this.heap[largetChildIndex] > rootNode) {
        this.heap[index] = this.heap[largetChildIndex];
        index = largetChildIndex;
      } else {
        break;
      }
    }
    this.heap[index] = rootNode;
  }
}

for (let i = 0; i < T; i++) {
  const M = Number(input[index++].trim());
  const ten = Math.floor(M / 10);
  const smallPQ = new MaxHeap(); //중앙미만-중앙
  const largePQ = new MinHeap(); //중앙값이상

  let result = `${(M + 1) / 2}\n`;
  const center = [];

  for (let i = 0; i <= ten; i++) {
    const arr = input[index++].trim().split(' ').map(Number);
    for (let j = 0; j < arr.length; j++) {
      if (smallPQ.size() === 0 && largePQ.size() === 0) {
        smallPQ.insert(arr[j]);
      } else if (smallPQ.size() > largePQ.size()) {
        if (smallPQ.peek() > arr[j]) {
          smallPQ.insert(arr[j]);
          largePQ.insert(smallPQ.peek());
          smallPQ.remove();
        } else {
          largePQ.insert(arr[j]);
        }
      } else if (smallPQ.size() === largePQ.size()) {
        if (smallPQ.peek() < arr[j]) {
          largePQ.insert(arr[j]);
          smallPQ.insert(largePQ.peek());
          largePQ.remove();
        } else {
          smallPQ.insert(arr[j]);
        }
      }
      if (j % 2 === 0) {
        center.push(smallPQ.peek());
      }
    }
  }

  for (let i = 0; i < center.length; i++) {
    result += `${center[i]}`;
    if (i !== 0 && i % 9 === 0) {
      result += '\n';
    } else {
      result += ' ';
    }
  }
  console.log(result);
}
