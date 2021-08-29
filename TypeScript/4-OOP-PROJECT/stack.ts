interface Stack {
  size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  //   next: StackNode | undefined;
  readonly next?: StackNode;
};

//연결리스트
class StackImpl implements Stack {
  private _size: number = 0; //내부에서만 쓰이면 _
  private _head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this._head };
    this._head = node;
    this._size++;
  }
  pop(): string {
    //this.head===undefined 는 위험하다.
    //null은 undefined가 아니다.
    //null==undefined, null!==undefined (==,===)
    if (this._head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this._head;
    this._head = node.next;

    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("young");
stack.push("ju");
stack.push("hungry");
while (stack.size !== 0) {
  console.log(stack.pop());
}

// stack.pop();
