function aclean(arr) {
  let temp = new Map();

  for (let el of arr) {
    let current = el.toLowerCase().split('').sort().join('');
    temp.set(current, el);
  }

  return Array.from(temp.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr)); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
