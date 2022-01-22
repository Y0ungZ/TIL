const getAverageAge = (objectArray) => {
  return objectArray.reduce((prev, current) => prev + current.age, 0) / objectArray.length;
};

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
