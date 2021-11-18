let result = 0;
const BFS = (n, length, sum, numbers, target) => {
  if (n === length) {
    if (sum === target) {
      result++;
    }
    return;
  }
  BFS(n + 1, length, sum + numbers[n], numbers, target);
  BFS(n + 1, length, sum - numbers[n], numbers, target);
};

function solution(numbers, target) {
  BFS(0, numbers.length, 0, numbers, target);
  return result;
}
