function sum(number1) {
  return function (number2) {
    //number1은 외부 렉시컬 환경에서 가져온다.
    return number1 + number2;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
