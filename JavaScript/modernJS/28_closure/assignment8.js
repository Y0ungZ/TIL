/* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(array) {
  return function (x) {
    return array.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
