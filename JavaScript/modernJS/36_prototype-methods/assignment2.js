function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');

//1. 'Rabbit'
rabbit.sayHi();
//2. undefined
Rabbit.prototype.sayHi();
//3. undefined
Object.getPrototypeOf(rabbit).sayHi();
//4. undefined
rabbit.__proto__.sayHi();
