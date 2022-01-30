let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (salaries) => {
  let [max, maxName] = [0, null];

  for (const [name, salarie] of Object.entries(salaries)) {
    if (max < salarie) {
      max = salarie;
      maxName = name;
    }
  }

  return maxName;
};

console.log(topSalary(salaries));
