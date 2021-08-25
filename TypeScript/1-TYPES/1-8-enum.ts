{
  /**
   * Enum : 관련상수값들을 한 곳에 정리.
   */
  //JavaScript ❌
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });

  const dayOfToday = DAYS_ENUM.MONDAY;
  console.log(dayOfToday);

  //TypeScript ⭕
  //그러나, enum은 가능하면 쓰지 않는 것이 좋다.
  //문자열은 수동적으로 하나하나 할당.
  enum Days {
    Monday = 3,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Thursday); //6
  const day = Days.Saturday;
  let day2: Days = Days.Sunday;
  day2 = Days.Thursday;
  day2 = 1; //OK! 💩
  console.log(day); //8

  //대체 가능!! 타입 보장.
  type DaysOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Sunday";
}
