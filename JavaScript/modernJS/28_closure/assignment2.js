function makeWorker() {
  let name = 'Pete';

  return function () {
    console.log(name);
  };
}

let name = 'John';

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

//Pete.
//자체 렉시컬 환경 -> 외부 렉시컬 환경 -> 전역 렉시컬 환경
