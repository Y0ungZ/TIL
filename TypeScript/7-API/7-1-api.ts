//Ctrl+클릭
//d는 타입이 정의되어져 있는 Type definition(declaration)
//https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
Array;

type Student = {
  passed: boolean;
};

//모든것이 true여야 true.
const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }];
const result = students.every((student) => {
  return student.passed;
});

console.log(result);

class Animal {}

class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isCat: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

//어떤 동물을 받아 animal is Cat만 리턴.
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat === true;
}

console.log(animals.every<Cat>(isCat));
