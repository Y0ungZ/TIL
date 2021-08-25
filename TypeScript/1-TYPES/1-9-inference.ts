{
  /**
   * Type Inference
   */
  let text = "hello"; //string 생략가능.
  text = "hi"; //OK
  // text = 3; -> NO!

  //명시하지 않으면 default any.
  //any는 쓰지말기!
  //message:string 혹은
  function print(message = "hello") {
    console.log(message);
  }

  print("wow");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 3);

  //타입추론은 편해보이지만, 별로 좋다고는 생각하지 않는다.
  //깊고 복잡한 프로젝트의 경우 타입을 명시하는 것이 좋다.
}
