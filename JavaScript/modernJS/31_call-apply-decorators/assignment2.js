function f(a) {
  console.log(a);
}

function throttle(func, time) {
  let flag = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (flag) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    flag = true;

    setTimeout(() => {
      flag = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, time);
  }

  return wrapper;
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored
