let name = 'John';

function sayHi() {
  console.log('Hi, ' + name);
}

name = 'Pete';

sayHi(); // what will it show: "John" or "Pete"?

//Pete
//함수는 외부변수 가장 최근 값 사용.
