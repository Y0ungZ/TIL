function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // 결과가 어떻게 될까요?

//에러가 발생한다. makeUser()의 this는 undefined.
//객체 내의 메서드의 this가 객체를 가리키는 것.
//this는 전체 함수가 된다. 함수의 현재 this.
//ref(){return this} -> user.ref().name으로 호출할 것.
//이렇게 하면 user.ref()가 메서드가 되고 this는 . 앞의 객체가 된다.
