function solution(num) {
  let play = 0;

  while (play < 500) {
    if (num === 1) {
      break;
    }

    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    play++;
  }

  if (play === 500 && num !== 1) {
    return -1;
  } else {
    return play;
  }
}
