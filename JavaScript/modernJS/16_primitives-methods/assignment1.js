let str = 'Hello';

str.test = 5;

alert(str.test);

// 'use strict' -> error 반환
// 비 엄격 모드 -> undefined.
// str.test 부분에서 래퍼 객체가 만들어짐.
// 엄격 모드에서는 래퍼 객체 수정시도시 에러 발생,
// 비 엄격 모드는 에러는 발생하지 않고 래퍼 객체에 test 프로퍼티 추가.
// 하지만 그 후 래퍼는 바로 삭제되어 실행될 때 test는 찾을 수 없는 상태이다.
// "원시값은 추가 데이터를 저장할 수 없다."
