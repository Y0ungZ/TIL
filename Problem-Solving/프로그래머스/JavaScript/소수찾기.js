function checkPrime(num) {
  let start = 2;
  while (start <= Math.sqrt(num)) {
    if (num % start++ < 1) {
      return false;
    }
  }
  return num > 1;
}

function solution(numbers) {
  let answer = new Set();
  const number = numbers.split('').map((el) => +el);

  for (let i = 1; i <= numbers.length; i++) {
    const temp = isPrime(number, i);

    for (let j = 0; j < temp.length; j++) {
      const current = +temp[j].join('');

      if (checkPrime(current)) {
        answer.add(current);
      }
    }
  }

  return answer.size;
}

function isPrime(number, selectNumber) {
  const array = [];
  if (selectNumber === 1) {
    return number.map((el) => [el]);
  }

  number.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const perm = isPrime(rest, selectNumber - 1);
    const attached = perm.map((el) => [fixed, ...el]);
    array.push(...attached);
  });
  return array;
}
