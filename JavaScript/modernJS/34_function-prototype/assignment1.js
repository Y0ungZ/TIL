'use strict';

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

//1. Rabbit.prototype에 할당하면 새로운 객체의 [[prototype]]이 됨.
// Rabbit.prototype = {};

// console.log(rabbit.eats); // true

//2. 참조란 것을 이해하기. prototype전체를 바꾸는(1) 거랑 다름.
// Rabbit.prototype.eats = false;

// console.log(rabbit.eats); // false

//3. rabbit에는 원래 eats가 없음.
// delete rabbit.eats;

// console.log(rabbit.eats); // true

//4.
delete Rabbit.prototype.eats;

console.log(rabbit.eats); // undefined
