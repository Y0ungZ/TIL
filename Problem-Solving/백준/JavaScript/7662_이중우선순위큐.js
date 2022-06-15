class Heap {
  constructor() {
    this.items = [];
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  findParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  findLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  findRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  findParent(idx) {
    return this.items[this.findParentIndex(idx)];
  }

  findLeftChild(idx) {
    return this.items[this.findLeftChildIdx(idx)];
  }

  findRightChild(idx) {
    return this.items[this.findRightChildIdx(idx)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;

    while (this.findParent(index) && this.findParent(index) > this.items[index]) {
      this.swap(index, this.findParentIndex(index));
      index = this.findParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      (this.findLeftChild(index) && this.findLeftChild(index) < this.items[index]) ||
      (this.findRightChild(index) && this.findRightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.findLeftChildIdx(index);

      if (this.findRightChild(index) && this.findRightChild(index) < this.items[smallerIndex]) {
        smallerIndex = this.findRightChildIdx(index);
      }

      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }

  add(value) {
    this.items.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.items.length === 0) {
      return;
    }
    if (this.items.length === 1) {
      return this.items.pop();
    }

    const value = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return value;
  }
}

class MaxHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;

    while (this.findParent(index) && this.findParent(index) < this.items[index]) {
      this.swap(index, this.findParentIndex(index));
      index = this.findParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      (this.findLeftChild(index) && this.findLeftChild(index) > this.items[index]) ||
      (this.findRightChild(index) && this.findRightChild(index) > this.items[index])
    ) {
      let bigIndex = this.findLeftChildIdx(index);

      if (this.findRightChild(index) && this.findRightChild(index) > this.items[bigIndex]) {
        bigIndex = this.findRightChildIdx(index);
      }

      this.swap(index, bigIndex);
      index = bigIndex;
    }
  }

  add(value) {
    this.items.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.items.length === 0) {
      return;
    }
    if (this.items.length === 1) {
      return this.items.pop();
    }

    const value = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return value;
  }
}

const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  let index = 0;
  const T = +input[index++].trim();

  const answer = [];

  for (let t = 0; t < T; t++) {
    const K = +input[index++].trim();
    const numberMap = new Map();
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();

    for (let k = 0; k < K; k++) {
      const [command, number] = input[index++].trim().split(" ");

      if (command === "I") {
        //Insert

        minHeap.add(+number);
        maxHeap.add(+number);

        if (numberMap.has(+number)) {
          numberMap.set(+number, numberMap.get(+number) + 1);
        } else {
          numberMap.set(+number, 1);
        }
      } else {
        //Delete -> -1(MinHeap), 1(MaxHeap)

        while (true) {
          let value;

          if (+number === -1) {
            value = minHeap.poll();
          } else {
            value = maxHeap.poll();
          }

          if (value) {
            if (numberMap.has(value)) {
              const count = numberMap.get(value);

              if (count === 1) {
                numberMap.delete(value);
              } else {
                numberMap.set(value, numberMap.get(value) - 1);
              }

              break;
            }
          } else {
            break;
          }
        }
      }
    }

    if (numberMap.size) {
      let maxRoot = maxHeap.peek();
      let minRoot = minHeap.peek();

      while (maxRoot && !numberMap.has(maxRoot)) {
        maxHeap.poll();
        maxRoot = maxHeap.peek();
      }

      while (minRoot && !numberMap.has(minRoot)) {
        minHeap.poll();
        minRoot = minHeap.peek();
      }

      if (!minRoot) {
        minRoot = maxRoot;
      }

      if (!maxRoot) {
        maxRoot = minRoot;
      }

      answer.push(`${maxRoot} ${minRoot}`);
    } else {
      answer.push("EMPTY");
    }
  }

  console.log(answer.join("\n"));
})();
