const getLastDayOfMonth = (year, month) => {
  let day = new Date(year, month + 1, 0);
  return day.getDate();
};

console.log(getLastDayOfMonth(2012, 1));
