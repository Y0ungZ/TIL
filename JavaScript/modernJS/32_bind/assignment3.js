'use strict';

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'John',
});

console.log(bound.test); // 얼럿 창엔 어떤 값이 출력될까요? 값이 나온 이유는 무엇일까요?

// undefined.
// bind를 적용하면 특수 객체를 반환함.
// 새로운 객체에는 test가 없다.
