let arr = ['a', 'b'];

arr.push(function () {
  alert(this);
});

arr[2](); // a,b,function(){...}

//arr[2]의 함수는 객체 메서드로서 arr을 참조하는 this를 받고 배열출력
