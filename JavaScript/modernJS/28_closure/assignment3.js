function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // ? => 0
console.log(counter2()); // ? => 1

// 각각 다른 makeCounter 호출에 의해 만들어졌다.
// 독립된 렉시컬 환경을 갖게되고,
// 자신만의 count를 갖게 된다.
