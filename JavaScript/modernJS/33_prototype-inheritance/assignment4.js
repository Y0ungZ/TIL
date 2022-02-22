let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// 햄스터 speedy가 음식을 먹습니다.
speedy.eat('apple');
console.log(speedy.stomach); // apple

// 햄스터 lazy는 배가 비어있도록 고쳐주세요.
console.log(lazy.stomach); // apple
