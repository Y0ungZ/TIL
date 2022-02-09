// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function () {
//       // shooter 함수
//       console.log(i); // 몇 번째 shooter인지 출력해줘야 함
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // 0번째 shooter가 10을 출력함
// army[5](); // 5번째 shooter 역시 10을 출력함
// 모든 shooter가 자신의 번호 대신 10을 출력하고 있음

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 11; i++) {
    let shooter = function () {
      // shooter 함수
      console.log(i); // 몇 번째 shooter인지 출력해줘야 함
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0번째 shooter가 10을 출력함
army[5](); // 5번째 shooter 역시 10을 출력함
// 모든 shooter가 자신의 번호 대신 10을 출력하고 있음
