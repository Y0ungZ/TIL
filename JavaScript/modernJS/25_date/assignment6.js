const getSecondsToday = () => {
  let now = new Date();

  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((now - start) / 1000);
};

console.log(getSecondsToday());
