let user = {
  name: 'John Smith',
  age: 35,
};

let JSON_to_Object = JSON.parse(JSON.stringify(user));

console.log(JSON_to_Object);
