# 프라미스와 에러 핸들링
## 목적
[모던자바스크립트](https://ko.javascript.info/promise-error-handling#tasks) 프라미스 에러 핸들링 과제에 대한 정리

---

## 과제 내용
**setTimeout에서의 에러**

아래 예시에서 `.catch`는 트리거가 되나? 이유와 함께 판단.
```
new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('에러 발생!');
  }, 1000);
}).catch(alert);
```

**내가 예상한 답** ❌

트리거된다. 
Promise 안의 예외발생은 당연히 reject처럼 다룰 것이고, catch에서 잡힐 것이라고 생각했다.

**정답** ⭕

**트리거 되지 않는다.** 
'암시적 `try..catch`'가 함수를 감싸고 있으므로 모든 동기적 에러는 '암시적 `try..catch`'에서 처리되는 것은 맞다.

> '암시적 `try..catch`' -> Promise executor와 Promise Handler 코드 주위에는 보이지않는(암시적) `try..catch`가 있다. 예외 발생시 '암시적 `try..catch`'에서 예외를 잡고 이를 reject처럼 다룬다.

**ex.**
```
new Promise((resolve,reject)=>{
  throw new Error("에러 발생!");
}).catch(alert); //Error: 에러 발생!
```
위 예시는 아래 예시와 똑같다.
```
new Promise((resolve,reject)=>{
  reject(new Error("에러 발생!"));
}).catch(alert); //Error: 에러 발생!
```

executor 주위의 '암시적 `try..catch`'는 스스로 에러를 잡고, 에러를 거부상태의 Promise로 변경시킨다. executor 뿐 아니라 Handler에서도 발생한다. `.then` 핸들러 안에서 `throw`를 사용해 에러를 던지면, 이 자체가 거부된 Promise를 의미한다. 가장 가까운 에러 핸들러로 넘어가는 것.

```
new Promise((resolve,reject)=>{
  resolve("ok");
}).then((result)=>{
  throw new Error("에러 발생!");
}).catch(alert); // Error: 에러 발생!
```

모든 종류의 에러는 '암시적 `try..catch`'에서 처리된다. 마지막 `.catch`는 명시적 에러 뿐아니라 핸들러 위쪽에서 발생한 비정상 에러 또한 잡는다.

 하지만 해당 문제의 에러는 executor가 실행되는 동안이 아닌 나중에(1s 후, 비동기란 뜻) 발생한다. 따라서 Promise는 에러를 처리할 수 없다. `setTimeout`은 자신만의 비동기 콜백을 갖고 있다. 자바스크립트의 이벤트 루프에 따라 콜백 함수는 콜백큐에 들어가고, 그렇게 될 경우 Promise는 절대 그 것을 catch할 수 없다. 전달된 콜백이 스택에 들어왔을 때는 이미 Promise는 존재하지 않기 때문에 오류는 catch될 수 없다. 해결 방법이 있다면 `setTimeout()`안에 `reject(...)`를 선언하자. `then()`에 전달된 함수는 already-resolved promse에 있는 경우에도 동기적으로 호출되지 않는다.<sub>(2)</sub>


[참고자료 - why promise can not catch the error throw by setTimeout?](https://stackoverflow.com/questions/48969591/why-promise-can-not-catch-the-error-throw-by-settimeout)

(2) [참고자료 - MDN Using Promises - Timing부분](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises)