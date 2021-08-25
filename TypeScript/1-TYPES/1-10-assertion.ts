{
  /**
   * Type Assertions 💩
   */

  //항상 문자열을 리턴하는 함수
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // result.length ❌ any타입이라서.

  //하지만 우리는 문자열을 리턴하는 함수인 것을 안다.
  console.log((result as string).length);
  console.log((<string>result).length);

  //반대로 문자열이라고 장담했는데, 숫자를 리턴한다면?
  //undefined => 예상치 못한 문제 발생!
  //따라서, 정말정말 확실할 때만 사용.

  const wrong: any = 5;
  //console.log((wrong as Array<number>).push(1)); Error!

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers(); //숫자 혹은 undefined
  numbers!.push(2); //진짜진짜 장담해. (!) <-> (?)

  //정말 100% 있어.
  const button = document.querySelector("class")!;

  //알아두면 좋지만 조금 위험할 수 있다.
}
