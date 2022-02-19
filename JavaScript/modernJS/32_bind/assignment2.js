'use strict';

function f() {
  console.log(this.name); // John. 함수 생성 시점의 context만 기억함.
}

f = f.bind({ name: 'John' }).bind({ name: 'Ann' });

f();

//한번 bind를 적용하면 bind를 사용해 컨텍스트를 다시 정의할 수 없다.
