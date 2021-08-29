interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!!");
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!!");
  }
  workPartTime() {}
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

//아무 타입이나 다 되는 것이 아닌 Employee를 확장한 아이만 가능.
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}
const young = new FullTimeEmployee();
const ju = new PartTimeEmployee();
young.workFullTime();
ju.workPartTime();

//as 사용은 좋지 않음.
// const youngAfterPay = payBad(young) as FullTimeEmployee;
const youngAfterPay = pay(young);
const juAfterPay = pay(ju);

const obj = {
  name: "young",
  age: 20,
};

const obj2 = {
  animal: "🐱",
};

console.log(getValue(obj, "name")); //young
console.log(getValue(obj, "age")); //20
console.log(getValue(obj2, "animal")); //🐱

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
