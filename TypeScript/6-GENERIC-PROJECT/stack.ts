{
  interface Stack<T> {
    size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    //   next: StackNode | undefined;
    readonly next?: StackNode<T>;
  };

  //연결리스트
  class StackImpl<T> implements Stack<T> {
    private _size: number = 0; //내부에서만 쓰이면 _
    private _head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node = { value, next: this._head };
      this._head = node;
      this._size++;
    }
    pop(): T {
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

  const stack = new StackImpl<string>(10);
  stack.push("young");
  stack.push("ju");
  stack.push("hungry");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  // stack.pop();
  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(345);
  stack2.push(678);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
