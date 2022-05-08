let obj, method;

obj = {
  go: function () {
    console.log(this);
  },
};

obj.go(); // (1) [object Object] 제대로 전달됨.

//(2) (obj.go)();는 obj.go();와 같음. .연산 먼저 -> () 실행

(method = obj.go)(); // (3) undefined, this를 잃어버림. obj.go를 f에 할당하고 f();

(obj.go || obj.stop)(); // (4) undefined
