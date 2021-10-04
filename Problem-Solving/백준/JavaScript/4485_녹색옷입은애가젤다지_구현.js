"use strict";
//https://url.kr/1sjrtm
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0]; //항상 최상위 노드 peek.

  insert = (row, col, value) => {
    const node = { row, col, value };
    this.heap.push(node);
    this.heapifyUp(); //배열에 가장 끝을 넣고, 다시 min heap의 형태로 만들기.
  };

  heapifyUp = () => {
    let index = this.heap.length - 1; //위로 올라가는 index값.
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      //루트노드 전까지
      const parentIndex = this.getParentIndex(index);

      //부모 노드의 value값이 마지막 value값보다 크다면
      //부모의 자리를 아래로 내림.
      if (this.heap[parentIndex].value > lastInsertedNode.value) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    //break를 만나서 자신의 자리를 찾은 상태
    //최종 인덱스에 가장 나중에 들어온 노드가 들어감.
    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop(); //끝노드를 부모로 만들고(임시)
      this.heapifyDown(); //min heap으로 만들기.
    }

    return rootNode;
  };

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    //left child가 있을 때까지 검사
    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      //더 작은 노드를 찾는다.
      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].value < this.heap[leftChildIndex].value
          ? rightChildIndex
          : leftChildIndex;

      //자식 노드의 value값이 루트보다 작다면 위로 끌어올림.
      if (this.heap[smallerChildIndex].value <= rootNode.value) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (row, col, value) => this.insert(row, col, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

let index = 0;
let result = 1;
let N = Number(input[index++]);
const makeArray = (N, value) => Array.from(Array(N), () => Array(N).fill(value));
let map;
let dist;

const dijkstra = (map, dist, N) => {
  const pq = new PriorityQueue();
  dist[0][0] = map[0][0];
  pq.enqueue(0, 0, map[0][0]);

  while (!pq.isEmpty()) {
    const current = pq.dequeue();

    const row = Number(current.row);
    const col = Number(current.col);

    for (let d = 0; d < 4; d++) {
      let mi = row + di[d];
      let mj = col + dj[d];

      if (mi < 0 || mi >= N || mj < 0 || mj >= N) continue;

      if (dist[mi][mj] > dist[row][col] + map[mi][mj]) {
        dist[mi][mj] = dist[row][col] + map[mi][mj];

        pq.enqueue(mi, mj, Number(dist[mi][mj]));
      }
    }
  }
  return dist[N - 1][N - 1];
};

while (N !== 0) {
  map = [];
  dist = makeArray(N, 10000);
  for (let i = 0; i < N; i++) {
    const current = input[index++].trim().split(" ");
    const tempMap = [];
    for (let j = 0; j < N; j++) {
      tempMap.push(Number(current[j]));
    }
    map.push(tempMap);
  } // init setting

  console.log(`Problem ${result++}: ${dijkstra(map, dist, N)}`);
  N = Number(input[index++]);
}
