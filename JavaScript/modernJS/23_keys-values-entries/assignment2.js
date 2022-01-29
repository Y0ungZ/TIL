const count = (object) => {
  return Object.keys(object).length;
};

let user = {
  name: 'John',
  age: 30,
};

console.log(count(user)); // 2
