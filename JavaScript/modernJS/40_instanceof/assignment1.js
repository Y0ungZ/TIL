function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true

//prototype이 동일하니까.
//a.__proto__ == B.prototype
