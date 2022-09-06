class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front++];
    return value;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(queue1, queue2) {
  const LIMIT_NUMBER = queue1.length * 3 - 1;
  let answer = 0;

  const Q1 = new Queue();
  const Q2 = new Queue();

  let sumQ1 = BigInt(0);
  let sumQ2 = BigInt(0);

  queue1.forEach((el) => {
    Q1.enqueue(el);
    sumQ1 += BigInt(el);
  });

  queue2.forEach((el) => {
    Q2.enqueue(el);
    sumQ2 += BigInt(el);
  });

  while (answer <= LIMIT_NUMBER) {
    if (answer === LIMIT_NUMBER) {
      answer = -1;
      break;
    }

    if (sumQ1 === sumQ2) {
      break;
    }

    if (sumQ1 < sumQ2) {
      const q2dequeue = Q2.dequeue();
      Q1.enqueue(q2dequeue);
      sumQ1 += BigInt(q2dequeue);
      sumQ2 -= BigInt(q2dequeue);
    } else {
      const q1dequeue = Q1.dequeue();
      Q2.enqueue(q1dequeue);
      sumQ1 -= BigInt(q1dequeue);
      sumQ2 += BigInt(q1dequeue);
    }
    answer++;
  }

  return answer;
}
