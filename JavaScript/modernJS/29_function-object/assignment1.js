function makeCount() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);
  counter.decrease = () => count--;

  return counter;
}
