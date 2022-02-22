let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.glasses);
console.log(pockets.pen);
console.log(pockets.sheet);
// pockets.glasses vs head.glasses.
// 모던 엔진에서는 객체에서 프로퍼티를 가져오는 것과
// 객체의 프로토타입에서 프로퍼티를 가져오는 것 사이에
// 성능적 차이가 없다. 최적화 잘해준다. (나보다 똑똑한듯)
