const filterRange = (array, start, end) => {
  return array.filter((number) => number >= start && number <= end);
};

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (조건에 맞는 요소)

console.log(arr); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
