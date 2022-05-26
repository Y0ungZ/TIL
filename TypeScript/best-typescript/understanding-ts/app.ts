function add(n1: number, n2: number) {
  //return number!!
  return n1 + n2;
}

function printResult(num: number) {
  //return void!!
  // undefined와는 다르다.
  // 값을 반환하지 않는 함수 -> void 타입
  // undefined는 값이 할당되지 않은 변수 참조나 정의되지 않은 것.
  console.log('Result:' + num);
}

printResult(add(5, 7)); //Result...
console.log(printResult(add(5, 7))); //Result ..., undefined
