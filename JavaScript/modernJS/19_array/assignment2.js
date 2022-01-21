const sumInput = () => {
  const number = [];

  while (true) {
    const input = prompt('숫자를 입력해주세요.', 0);

    if (input === '' || input === null || !isFinite(input)) {
      break;
    }

    number.push(+input);
  }

  return number.reduce((a, b) => a + b);
};

alert(sumInput());
