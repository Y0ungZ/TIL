class Heap {
  constructor() {
    this.items = [];
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getParent(idx) {
    return this.items[this.getParentIdx(idx)];
  }

  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  getLeftChild(idx) {
    return this.items[this.getLeftChildIdx(idx)];
  }

  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  getRightChild(idx) {
    return this.items[this.getRightChildIdx(idx)];
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[0];
  }
}

class MinHeap extends Heap {
  bubbuleUp() {
    let index = this.items.length - 1;

    while (this.getParent(index) && this.getParent(index) > this.items[index]) {
      this.swap(index, this.getParentIdx(index));
      index = this.getParentIdx(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.getLeftChild(index) &&
      (this.getLeftChild(index) < this.items[index] ||
        this.getRightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.getLeftChildIdx(index);

      if (this.getRightChild(index) && this.items[smallerIndex] > this.getRightChild(index)) {
        smallerIndex = this.getRightChildIdx(index);
      }

      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  }

  add(value) {
    this.items.push(value);
    this.bubbuleUp();
  }

  poll() {
    if (this.size() === 1) {
      return this.items.pop();
    } else if (this.size() === 0) {
      return 0;
    }

    const root = this.peek();
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return root;
  }
}

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const N = +input[0].trim();

  const minHeap = new MinHeap();

  let index = 1;
  let answer = [];

  while (index <= N) {
    const value = +input[index++].trim();

    if (value === 0) {
      //가장 작은 값 출력
      answer.push(minHeap.poll());
    } else {
      //추가
      minHeap.add(value);
    }
  }

  console.log(answer.join('\n'));
})();
