let calculator = {
  read() {
    this.one = +prompt('값을 입력해주세요.', 0);
    this.two = +prompt('값을 입력해주세요.', 0);
  },
  sum() {
    return this.one + this.two;
  },
  mul() {
    return this.one * this.two;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
