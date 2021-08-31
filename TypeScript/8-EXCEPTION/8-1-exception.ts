//Java: Exception
//JavaScript: Error
// const array = new Array(10000000000000000000000000);
//에러는 보통 컴파일 시에 알려줌.

//Error(Exception) Handling: try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === "not exists") {
    //에러 메시지는 상세하게.
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}

const fileName = "not exists";
try {
  //에러 발생 부분만 try로 감싸는 것이 좋다.
  console.log(readFile(fileName));
} catch (error) {
  //뒷 처리
  //만약, catch에서 return 이 된다면 가능하면 finally안에서 남은 필요한 동작들 넣어주기.
  console.log(`catched!!!`);
} finally {
  console.log("finally!!!");
  closeFile(fileName);
}
console.log("wow");
