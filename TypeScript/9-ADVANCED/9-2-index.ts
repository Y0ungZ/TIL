{
  const obj = {
    name: "young",
  };
  obj.name; //young
  obj["name"]; //young

  //타입도 index 기반으로 타입 결정 가능!
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; //string이 된다.
  const text: Name = "hello";

  type Gender = Animal["gender"]; // "male" | "female"
  type Keys = keyof Animal; //Union으로 할당, 'name' | 'age' | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "young",
    gender: "female",
  };
}
