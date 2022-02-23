// let obj2 = new obj.constructor();

function Desk(object) {
  this.object = object;
}

let desk = new Desk('pensil');
let desk2 = new desk.constructor('bottle');

console.log(desk2.object);
