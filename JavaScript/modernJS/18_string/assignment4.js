const extractCurrencyValue = (string) => {
  return +string.slice(1);
};

console.log(extractCurrencyValue('$120'));
