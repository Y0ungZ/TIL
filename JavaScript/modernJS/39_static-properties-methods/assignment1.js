class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit('Rab');

console.log(rabbit.hasOwnProperty('name'));

//class Rabbit : Rabbit.__proto__ === Function.prototype
//class Rabbit extends Object : super()무조건 있어야함, Rabbit.__proto__ === Object
