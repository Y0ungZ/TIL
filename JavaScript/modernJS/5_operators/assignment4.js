let a = prompt('덧셈할 첫 번째 숫자를 입력해주세요.', 1);
let b = prompt('덧셈할 두 번째 숫자를 입력해주세요.', 2);

alert(a + b); // 12

//수정하기

let a = prompt('덧셈할 첫 번째 숫자를 입력해주세요.', 1);
let b = prompt('덧셈할 두 번째 숫자를 입력해주세요.', 2);

alert(+a + +b); // 3 , prompt앞에 단항연산 붙여서도 변환가능.
