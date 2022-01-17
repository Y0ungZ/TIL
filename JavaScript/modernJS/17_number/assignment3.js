const readNumber = function isFiniteNumber() {
  let judge;

  while (true) {
    judge = prompt('숫자를 입력하세요.', 0);

    if (isFinite(judge)) {
      break;
    }
    if (judge === null || judge === '') {
      judge = null;
      break;
    }
  }

  return judge;
};

readNumber();
