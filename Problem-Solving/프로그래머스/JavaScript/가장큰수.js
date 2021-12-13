function solution(numbers) {
  numbers = numbers.map((number) => number.toString());

  numbers.sort((a, b) => b + a - (a + b));

  return numbers[0] === '0' ? '0' : numbers.join('');
}
