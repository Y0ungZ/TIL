const getSecondsToTomorrow = () => {
  let day = new Date();

  let end = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);

  return Math.round((end - day) / 1000);
};

console.log(getSecondsToTomorrow());
