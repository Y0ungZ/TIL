// new A() == new B()
// this대신 객체를 반환하게 하기

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(new A() == new B()); //true
