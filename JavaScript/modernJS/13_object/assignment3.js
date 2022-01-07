const user = {
  name: 'John',
};
// 아래 코드는 에러 없이 실행될까요?
user.name = 'Pete';

//가능하다.
//const는 값 변경을 막고, 객체 내용 변경은 허용함.
//user=123; 안됨.
