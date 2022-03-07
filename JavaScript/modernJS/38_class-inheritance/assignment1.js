class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); //자식 클래스 생성자에서 super호출.
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('White Rabbit');
console.log(rabbit.name);
