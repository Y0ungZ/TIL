function sum(num) {
  let result = num;

  function temp(num2) {
    result += num2;
    return temp;
  }

  temp.toString = function () {
    return result;
  };

  return temp;
}

console.log(sum(1)(2).toString());
console.log(sum(1)(2)(3).toString());
console.log(sum(5)(-1)(2).toString());
console.log(sum(1)(2)(3)(4)(5).toString());
