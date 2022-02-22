let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

// full이 생기는 객체는 rabbit이다.
// this는 프로토타입에 관계없이 . 앞을 참조한다.
