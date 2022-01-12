function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    let number = +prompt('값을 입력해주세요.', 0);
    this.value += number;
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
