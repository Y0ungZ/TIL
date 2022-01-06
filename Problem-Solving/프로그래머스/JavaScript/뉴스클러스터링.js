function makeElement(string) {
  let array = [];
  for (let i = 0; i < string.length - 1; i++) {
    let element = string[i] + string[i + 1];
    if (/^[a-z]*/.exec(element)[0] === element) {
      array.push(element);
    }
  }
  return array;
}

function solution(str1, str2) {
  const INTEGER = 65536;
  let answer = 0;

  const A = makeElement(str1.toLowerCase());
  const B = makeElement(str2.toLowerCase());

  const visitA = Array.from({ length: A.length }, () => false);
  const visitB = Array.from({ length: B.length }, () => false);

  const intersection = A.filter((value, index) => {
    for (let i = 0; i < B.length; i++) {
      if (B[i] === value && !visitB[i]) {
        visitB[i] = true;
        visitA[index] = true;
        return true;
      }
    }
  });

  const union = [...intersection];

  visitA.forEach((el, idx) => {
    if (!visitA[idx]) {
      union.push(A[idx]);
    }
  });

  visitB.forEach((el, idx) => {
    if (!visitB[idx]) {
      union.push(B[idx]);
    }
  });

  if (!intersection.length && !union.length) {
    answer = 1;
  } else {
    answer = intersection.length / union.length;
  }

  return Math.floor(answer * INTEGER);
}
