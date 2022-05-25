//(1)
// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: 'YoungJu',
//   age: 100,
//   hobbies: ['Drawing', 'Eating'],
//   role: [2,'author']
// };
//person:object => 포괄적. person.name을 할 경우 컴파일 오류.
//WHY? object를 타입스크립트는 어떤 정보도 주지 않는 객체가 있다고 이해한다.
//객체에 대한 정보, 어떤 타입의 속성도 지원하지 않음.
//다만, (1)처럼 명시적으로 지정하는 것은 좋은 방식이 아니다.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'YoungJu',
    age: 100,
    hobbies: ['Drawing', 'Eating'],
    role: Role.ADMIN
};
console.log(person.name);
var favoriteFoods;
favoriteFoods = ['Chicken'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    //hobby surely string
    console.log(hobby.toUpperCase());
}
//주의! tuple의 경우 push는 예외적으로 허용된다.
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
