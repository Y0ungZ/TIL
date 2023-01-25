class Heap {
  constructor() {
    this.items = [];
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  findParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  findLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  findRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  findParent(idx) {
    return this.items[this.findParentIdx(idx)];
  }

  findLeftChild(idx) {
    return this.items[this.findLeftChildIdx(idx)];
  }

  findRightChild(idx) {
    return this.items[this.findRightChildIdx(idx)];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let lastIdx = this.items.length - 1;

    while (this.findParent(lastIdx) && this.findParent(lastIdx)[1] > this.items[lastIdx][1]) {
      this.swap(lastIdx, this.findParentIdx(lastIdx));
      lastIdx = this.findParentIdx(lastIdx);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      (this.findLeftChild(index) && this.findLeftChild(index)[1] < this.items[index][1]) ||
      (this.findRightChild(index) && this.findRightChild(index)[1] < this.items[index][1])
    ) {
      let smallerIndex = this.findLeftChildIdx(index);

      if (
        this.findRightChild(index) &&
        this.findRightChild(index)[1] < this.items[smallerIndex][1]
      ) {
        smallerIndex = this.findRightChildIdx(index);
      }

      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  }
  add(value) {
    this.items.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.size() === 1) {
      return this.items.pop();
    }

    const value = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return value;
  }
}

const dijkstra = (start, adjList, N) => {
  const minHeap = new MinHeap();
  const dist = Array(N + 1).fill(Infinity);
  dist[start] = 0;
  minHeap.add([start, 0]);

  while (minHeap.size()) {
    const [vertex, cost] = minHeap.poll();

    if (!adjList[vertex]) continue;
    if (dist[vertex] < cost) continue;

    for (let i = 0; i < adjList[vertex].length; i++) {
      const [nextVertex, nextCost] = adjList[vertex][i];

      if (dist[nextVertex] > cost + nextCost) {
        dist[nextVertex] = cost + nextCost;
        minHeap.add([nextVertex, dist[nextVertex]]);
      }
    }
  }

  return dist;
};

const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M] = input[0].trim().split(" ").map(Number);
  const adjList = Array.from({ length: N + 1 }, () => []);

  for (let j = 0; j < M; j++) {
    const [A, B, C] = input[1 + j].trim().split(" ").map(Number);
    adjList[A].push([B, C]);
    adjList[B].push([A, C]);
  }

  const answer = dijkstra(1, adjList, N);
  console.log(answer[N]);
})();
