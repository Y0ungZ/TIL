const x = {}
const y = {}
console.log(x);
console.log(y);
console.log(x.__proto__ === y.__proto__); //true
//모든 Object는 proto를 상속받고
//Proto안에 기본적 함수가 있어서 사용가능.

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance memver level
    // this.makeCoffee = (shots) => {
    //     console.log('making... ☕');
    // }
}

//Prototype member level
CoffeeMachine.prototype.makeCoffee = () => {
    console.log('making... ☕');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}
//연결
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const lattemachine = new LatteMachine(123);
console.log(lattemachine);
lattemachine.makeCoffee();
