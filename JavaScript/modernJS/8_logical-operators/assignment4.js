let roles = prompt('누구신가요?', '');

if (roles === 'Admin') {
  let password = prompt('비밀번호를 입력해주세요.', '');
  if (password === 'TheMaster') {
    alert('Welcome!');
  } else if (password.length) {
    alert('인증에 실패하였습니다.');
  } else {
    alert('취소되었습니다.');
  }
} else if (roles.length) {
  alert("I don't know you");
} else {
  alert('Canceled');
}
