const sumSalaries = (object) => {
  return Object.values(object).reduce((a, b) => a + b);
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650
