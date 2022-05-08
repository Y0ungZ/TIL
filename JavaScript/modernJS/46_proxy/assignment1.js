let user = {
  name: 'John',
};

function wrap(target) {
  return new Proxy(target, {
    /* 여기에 코드를 작성하세요. */
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else {
        throw new ReferenceError(`ReferenceError: Property doesn't exist "${prop}"`);
      }
    },
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // ReferenceError: Property doesn't exist "age"
