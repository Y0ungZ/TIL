alert(null || 2 || undefined);

// 2
// ||(OR) 은 첫번째 truthy 반환 전 값 return.

alert(alert(1) || 2 || alert(3));

// alert(1) 실행 -> alert(2) 실행
// alert는 undefined를 반환한다.
// 1. 첫번째 ||(OR)는 피연산자 alert(1)를 평가한다. 이때, 1이 출력된다.
// 2. undefined가 반환되기 때문에, OR은 다음 피연산자를 평가한다. truthy를 찾는다.
// 3. 2는 truthy이다. 실행이 멈추고 2가 반환된다. 가장 바깥 alert의 피연산자가 되어 출력된다.

alert(alert(1) && alert(2));

// alert(1) 실행 -> alert(undefined) 실행
// alert는 단순히 메시지만 띄워주고 의미있는 값을 반환하지 않음.
// alert(1)을 평가하고, falsy(undefined)이기 때문에 멈춘다.
// falsy를 만났으니 그 값(undefined)을 출력하고 연산을 멈춘다.

alert(null || (2 && 3) || 4);
// 3 출력
