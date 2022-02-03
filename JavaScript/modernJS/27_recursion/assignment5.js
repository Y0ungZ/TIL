const printListReverseUsingFor = (list) => {
  let result = [];
  let temp = list;

  while (temp) {
    result.push(temp.value);
    temp = temp.next;
  }

  return result.reverse().join('\n');
};
const printListReverseUsingRec = (list) => {
  if (list.next) {
    printListReverseUsingRec(list.next);
  }
  console.log(list.value);
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

console.log(printListReverseUsingFor(list));
console.log(printListReverseUsingRec(list));
