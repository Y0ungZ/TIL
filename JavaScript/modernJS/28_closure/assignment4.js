function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // ? => 1
console.log(counter.up()); // ? => 2
console.log(counter.down()); // ? => 1

//잘 동작한다.
//생성자 함수의 두 중첩 함수는 동일한 외부 렉시컬 환경에서
//만들어짐. count를 공유한다.
