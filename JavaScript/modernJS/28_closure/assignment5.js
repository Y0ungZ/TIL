let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();

// 오류
// if문 블럭 안(내부)
// 외부에서는 내부함수를 호출할 수 없음.
