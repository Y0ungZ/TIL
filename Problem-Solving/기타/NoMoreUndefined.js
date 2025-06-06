/**
 * https://toss.im/career/article/next-developer-2023-sample-questions
 * 문제명: No More Undefined
 * 김토스는 토스에서 외부 SDK를 연동하고 있습니다.
 * 연동하던 중 중간에 어떤 값이라도 undefined 일 수 있는 객체를 다뤄야 한다는 것을 알게 되었습니다.위와 같은 객체를 쉽게 다룰 수 있도록 유틸리티 함수를 만들려고 합니다.
 * 깊게 undefined 일 수 있는 객체의 값을 안전하게 가져올 수 있도록 safelyGet 함수를 구현해 주세요.
 * */

/* repository가 undefined인 경우 */
const object1 = {
  repository: undefined,
};

/* repository의 readme가 undefined인 경우 */
const object2 = {
  repository: {
    readme: undefined,
  },
};

/** repository.readme 모두가 존재하는 경우 */
const object3 = {
  repository: {
    readme: {
      extension: 'md',
      content: '금융을 쉽고 간편하게',
    },
  },
};

const safelyGet = (object, string) => {
  const properties = string.split('.');
  let result = object;

  for (let index = 0; index < properties.length; index++) {
    const property = properties[index];
    if (result[property] === undefined) {
      return undefined;
    }
    result = result[property];
  }

  return result;
};

console.log(safelyGet(object1, 'repository.readme.extension'));
// -> 반환 값: undefined

console.log(safelyGet(object1, 'repository.readme'));
// -> 반환 값: undefined

console.log(safelyGet(object1, 'repository'));
// -> 반환 값: undefined

console.log(safelyGet(object2, 'repository.readme.extension'));
// -> 반환 값: undefined

console.log(safelyGet(object2, 'repository.readme'));
// -> 반환 값: undefined

console.log(safelyGet(object2, 'repository'));
// -> 반환 값: { readme: undefined }

console.log(safelyGet(object3, 'repository.readme.extension'));
// -> 반환 값: 'md'

console.log(safelyGet(object3, 'repository.readme'));
// -> 반환 값: { extension: 'md' }
// { extension: 'md', content: '금융을 쉽고 간편하게' }가 반환됨
