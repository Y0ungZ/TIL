function Calculator() {
  this.read = () => {
    this.A = +prompt('값을 입력해주세요.', 0);
    this.B = +prompt('값을 입력해주세요.', 0);
  };

  this.sum = () => {
    return this.A + this.B;
  };

  this.mul = () => {
    return this.A * this.B;
  };
}

let calculator = new Calculator();
calculator.read();

alert('Sum = ' + calculator.sum());
alert('Mul = ' + calculator.mul());
