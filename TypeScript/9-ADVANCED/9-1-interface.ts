{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  //둘다 가능한 것.
  //Object 형태로 만들 수 있다.
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  //Class 구현 가능
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  //Extendes 가능
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  //다른점

  //오직 인터페이스만 머지가 가능하다.
  //only interfaces can be merged.

  interface PositionInterface {
    z: number;
  }

  // type PositionType{}

  //Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; //string

  type NumberType = number;
  type Direction = "left" | "right"; //인터페이스는 절대 구현 불가.
}
