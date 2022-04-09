function* pseudoRandom(seed) {
  let number = seed;
  while (true) {
    number = (number * 16807) % 2147483647;
    yield number;
  }
  //return function(){...} 와 동일하나
  //일반 함수는 제너레이터의 이터러블 for...of X.
  //모던 자바스크립트에서는 많이 안쓰이나, 데이터 스트림을 다뤄야한다면 유용.
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
