const printListUsingFor = (list) => {
  let result = '';
  let temp = list;
  while (temp) {
    result += `${temp.value} `;
    temp = temp.next;
  }
  return result;
};
const printListUsingRec = (list) => {
  console.log(list.value);

  if (list.next) {
    printListUsingRec(list.next);
  }
};

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log(printListUsingFor(list));
console.log(printListUsingRec(list));
