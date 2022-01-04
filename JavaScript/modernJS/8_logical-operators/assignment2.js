let age = prompt('나이를 입력해주세요.', '');

if (age >= 14 && age <= 90) {
  alert('14세 이상 90세 이하에 속합니다.');
} else {
  alert('사이 범위에 속하지 않음.');
}

//

if (age < 14 || age > 90) {
  alert('바깥 범위입니다.');
} else {
  alert('사이 범위입니다.');
}

if (!(age >= 14 && age <= 90)) {
  alert('바깥 범위입니다.');
} else {
  alert('사이 범위입니다.');
}
