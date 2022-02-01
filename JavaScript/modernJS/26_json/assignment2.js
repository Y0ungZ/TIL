let room = {
  number: 23,
};

let meetup = {
  title: 'Conference',
  occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
  place: room,
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(
    meetup,
    function replacer(key, value) {
      /* 코드를 작성할 곳 */
      return key != '' && value === meetup ? undefined : value;
    },
    2
  )
);

/* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */
