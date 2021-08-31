console.log(this); //window

function simpleFunc() {
    console.log(this);
}
simpleFunc(); //window

class Counter{
    count = 0;
    //increase = () => 와의 차이는? 밑으로 내려가기.
    increase = function () {
        console.log(this);
    };
}

const counter = new Counter();
counter.increase(); //counter
// const caller = counter.increase; //this의 정보를 잃어버림.
//let과 const로 선언한 변수는
//윈도우에 등록되어져 있지 않다.
//이 caller를 호출하는 것은 윈도우, 그 어떤 오브젝트도 아니다.
// caller(); //undefined

//var은 윈도우에서도, 글로벌적으로도 접근가능.
//호이스팅뿐아니라 재정의 문제도 발생할 수 있는 것.

class Bob{

}

const bob = new Bob();
bob.run = counter.increase; //run을 bob이 불렀기 때문에,
bob.run(); //bob자체가 출력됨.

//=> 자바스크립트는 this라는 정보를, 함수를 다른곳으로 할당하는 순간 잃어버릴 수 있다.
//오브젝트와 함수의 관계를, this를 꽁꽁 묶어주려면 bind를 사용해야 한다.

const caller = counter.increase.bind(counter);
caller(); //counter

//혹은 함수선언시 function이 아니라
//()=> arrow function을 이용하게되면 bind를 하지 않아도 연결.
//클래스 내부에 바인딩을 하고 싶거나 this로 접근하는 함수가 있다면 arrow function 사용이 더 좋을수도!
