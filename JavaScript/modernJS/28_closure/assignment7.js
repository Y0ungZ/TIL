let x = 1;

function func() {
  console.log(x); // ?
  //레퍼런스에러.
  //let 이전에 사용 불가.
  //TDZ

  let x = 2;
}

func();
