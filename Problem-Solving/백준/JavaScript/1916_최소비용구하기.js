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

    while (this.findParent(index) && this.findParent(index)[1] > this.items[index][1]) {
      this.swap(index, this.findParentIdx(index));
      index = this.findParentIdx(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (this.findLeftChild(index) && this.findLeftChild(index)[1] < this.items[index][1]) {
      let smallerIndex = this.findLeftChildIdx(index);

      if (
        this.findRightChild(index) &&
        this.findRightChild(index)[1] < this.items[smallerIndex][1]
      ) {
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
    if (this.items.length === 1) {
      return this.items.pop();
    }
    let value = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return value;
  }
}

const dijkstra = (start, adjList, V) => {
  const minHeap = new MinHeap();
  const dist = Array(V + 1).fill(Infinity);
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

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const N = +input[0].trim();
  const M = +input[1].trim();

  const adjList = {};

  for (let i = 1; i <= N; i++) {
    adjList[i] = [];
  }

  for (let j = 2; j <= M + 1; j++) {
    const [from, to, price] = input[j].trim().split(' ').map(Number);
    adjList[from].push([to, price]);
  }

  const [start, end] = input[2 + M].trim().split(' ').map(Number);
  const answer = dijkstra(start, adjList, N);
  console.log(answer[end]);
})();
