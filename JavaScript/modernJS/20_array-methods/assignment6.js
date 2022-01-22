function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = (string) => {
    const temp = string.split(' ');
    const one = +temp[0];
    const option = temp[1];
    const two = +temp[2];

    return this.methods[option](one, two);
  };

  this.addMethod = (name, func) => {
    this.methods[name] = func;
  };
}

const calc = new Calculator();
console.log(calc.calculate('3 + 7'));

const powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result); // 8
