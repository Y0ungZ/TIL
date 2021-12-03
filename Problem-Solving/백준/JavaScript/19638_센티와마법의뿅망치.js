'use strict';

//설계부족으로 테케 통과하고 다 맞은줄알고
//잘못된 코드를 붙잡고 오랜시간을 허비했다.
//젤다문제를 풀면서 pq를 간단하게 구현해보려다가
//시간초과를 경험했다.
//주어진 시간을 잘 확인하고 설계를 잘하자...

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;
  getRightChildIdx = (parentIdx) => parentIdx * 2 + 2;
  getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);

  peek = () => this.heap[0];

  insert = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIdx = this.getParentIdx(index);

      if (this.heap[parentIdx] < lastInsertedNode) {
        this.heap[index] = this.heap[parentIdx];
        index = parentIdx;
      } else break;
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

    while (this.getLeftChildIdx(index) < count) {
      const leftChildIdx = this.getLeftChildIdx(index);
      const rightChildIdx = this.getRightChildIdx(index);

      const biggerChildIdx =
        rightChildIdx < count && this.heap[rightChildIdx] > this.heap[leftChildIdx]
          ? rightChildIdx
          : leftChildIdx;

      if (this.heap[biggerChildIdx] > rootNode) {
        this.heap[index] = this.heap[biggerChildIdx];
        index = biggerChildIdx;
      } else break;
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

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, H, T] = input[0].trim().split(' ').map(Number);
const pq = new PriorityQueue();
let hammer = 0;

for (let i = 0; i < N; i++) {
  const temp = Number(input[1 + i].trim());
  pq.enqueue(temp);
}

while (hammer < T && !pq.isEmpty()) {
  let peek = pq.peek();

  if (peek < H) {
    break;
  }

  if (peek === 1) {
    break;
  }

  pq.enqueue(Math.floor(pq.dequeue() / 2));
  hammer++;
}

if (pq.peek() < H) {
  console.log('YES');
  console.log(hammer);
} else {
  console.log('NO');
  console.log(pq.peek());
}
