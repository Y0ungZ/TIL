const randomInteger = function minToMaxRandomIntegerValue(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

console.log(randomInteger(1, 5)); // 1
console.log(randomInteger(1, 5)); // 3
console.log(randomInteger(1, 5)); // 5
