const getLocalDay = (date) => {
  let day = date.getDay();

  return day === 0 ? 7 : day;
};

let date = new Date(2019, 11, 5); // 2019년 11월 5일
console.log(getLocalDay(date)); // 금요일이므로, 5가 출력되어야 함
