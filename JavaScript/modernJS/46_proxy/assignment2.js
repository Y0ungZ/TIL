let array = [1, 2, 3];

array = new Proxy(array, {
  /* 여기에 코드를 작성하세요. */
  get(target, prop) {
    if (prop < 0) {
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop);
  },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// 배열 기능은 "변함없이 그대로" 동작해야 합니다.
