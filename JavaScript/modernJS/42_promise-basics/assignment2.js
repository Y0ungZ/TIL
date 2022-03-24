function delay(ms) {
  // 여기에 코드 작성
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(), ms);
  });
}

delay(3000).then(() => console.log('3초후 실행'));
