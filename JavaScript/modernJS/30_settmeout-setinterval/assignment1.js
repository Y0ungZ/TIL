//using setInterval
function printIntervalNumbers(from, to) {
  let start = from;

  const timer = setInterval(() => {
    alert(start);
    if (start === to) {
      clearInterval(timer);
    }
    start++;
  }, 1000);
}

//using setTimeout
function printTimeNumbers(from, to) {
  let start = from;

  setTimeout(function clock() {
    alert(start);
    if (start < to) {
      setTimeout(clock, 1000);
    }
    start++;
  }, 1000);
}

let from = +prompt('시작숫자를 입력해주세요.', 0);
let to = +prompt('종료숫자를 입력해주세요.', 0);

// printIntervalNumbers(from, to);
printTimeNumbers(from, to);
