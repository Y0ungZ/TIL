const random = function minToMaxRandomValue(min, max) {
  return min + Math.random() * (max - min);
  // min + [0 ... max-min]
};

console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5)); // 3.7894332423
console.log(random(1, 5)); // 4.3435234525
