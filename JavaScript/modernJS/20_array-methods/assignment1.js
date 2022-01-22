const camelize = (string) => {
  return string
    .split('-')
    .map((word, idx) => (idx === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
};

console.log(camelize('background-color'));
