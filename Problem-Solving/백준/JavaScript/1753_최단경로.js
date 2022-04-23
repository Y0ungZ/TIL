class Heap {
  constructor() {
    this.items = [];
  }

  swap(idx1, idx2) {
    let temp = this.items[idx1];
    this.items[idx1] = this.items[idx2];
    this.items[idx2] = temp;
  }

  findParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  findLeftChildIndex(index) {
    return index * 2 + 1;
  }

  findRightChildIndex(index) {
    return index * 2 + 2;
  }

  findParent(index) {
    return this.items[this.findParentIndex(index)];
  }

  findLeftChild(index) {
    return this.items[this.findLeftChildIndex(index)];
  }

  findRightChild(index) {
    return this.items[this.findRightChildIndex(index)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  //최소힙 -> root에 최솟값이 기록되고
  //값을 넣을 때 최소힙 답게 알맞은 위치로 넣어주는 bubbleUp
  //최솟값이 빠지면 마지막 노드를 root로 보내고 재배치하는 bubbleDown

  bubbleUp() {
    let index = this.items.length - 1; //마지막 원소

    while (this.findParent(index) && this.findParent(index)[1] > this.items[index][1]) {
      //부모값이 존재하고 자식이 더 최솟값이다.
      this.swap(index, this.findParentIndex(index));
      index = this.findParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.findLeftChild(index) &&
      this.findRightChild(index) &&
      (this.findLeftChild(index)[1] < this.items[index][1] ||
        this.findRightChild(index)[1] < this.items[index][1])
    ) {
      //루트로 최솟값을 옮기는 과정
      let smallerIndex = this.findLeftChildIndex(index);

      //만약 오른쪽 값이 더 작다면
      if (
        this.findRightChild(index) &&
        this.findRightChild(index)[1] < this.items[smallerIndex][1]
      ) {
        smallerIndex = this.findRightChildIndex(index);
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
    let item = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return item;
  }
}

const dijkstra = (start, dist, adjList) => {
  const minHeap = new MinHeap();
  minHeap.add([start, 0]);

  while (minHeap.size()) {
    const [v, cost] = minHeap.poll();

    if (!adjList[v]) continue;
    if (dist[v] < cost) continue;

    for (let i = 0; i < adjList[v].length; i++) {
      const [nextVertex, nextCost] = adjList[v][i];

      if (dist[nextVertex] > cost + nextCost) {
        dist[nextVertex] = cost + nextCost;
        minHeap.add([nextVertex, dist[nextVertex]]);
      }
    }
  }
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [V, E] = input[0].trim().split(' ').map(Number);
  const K = +input[1].trim();

  const adjList = Array.from({ length: V + 1 }, () => new Array());
  const dist = Array(V + 1).fill(Infinity);
  dist[K] = 0;

  for (let i = 0; i < E; i++) {
    const [u, v, w] = input[2 + i].trim().split(' ').map(Number);
    adjList[u].push([v, w]);
  }

  dijkstra(K, dist, adjList);

  let result = [];

  for (let i = 1; i <= V; i++) {
    if (dist[i] === Infinity) {
      result.push('INF');
      continue;
    }
    result.push(dist[i]);
  }

  console.log(result.join('\n'));
})();
