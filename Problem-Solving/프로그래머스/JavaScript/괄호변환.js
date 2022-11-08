function solution(p) {
  if (isCorrectString(p)) {
    return p;
  }

  return divideString(p);
}

/**
 * 주어진 "과정"을 수행하는 재귀함수.
 * @returns {string}
 */
function divideString(str) {
  // 1. 빈 문자열일 경우, 그대로 반환.
  if (str === "") return str;

  // 2. 두 균형잡힌 괄호 문자열 u, v 로 분리한다.
  const balancedIndex = getBalancedIndex(str);
  const u = str.slice(0, balancedIndex + 1);
  const v = str.slice(balancedIndex + 1);

  if (isCorrectString(u)) {
    // 3. u가 올바른 괄호 문자열이라면 v에 대해 1단계부터 수행, 이어 붙여 반환.
    return u + divideString(v);
  }

  // 4. u가 올바른 괄호 문자열이 아니다.
  // 4-4.
  let reverseU = "";

  for (let index = 1; index < u.length - 1; index++) {
    reverseU += u[index] === "(" ? ")" : "(";
  }

  // 4-1,2,3,5
  return "(" + divideString(v) + ")" + reverseU;
}

/**
 * 균형잡힌 괄호 문자열을 만드는 Index 값을 리턴한다.
 * @returns {number}
 */
function getBalancedIndex(str) {
  let leftBracketCnt = 0;
  let rightBracketCnt = 0;

  for (let index = 0; index < str.length; index++) {
    str[index] === "(" ? leftBracketCnt++ : rightBracketCnt++;

    if (leftBracketCnt === rightBracketCnt) return index;
  }
}

/**
 * 올바른 괄호 문자열인지 판별한다.
 * @returns {boolean}
 */
function isCorrectString(str) {
  const stack = [];
  for (const s of str) {
    if (s === "(") {
      stack.push("(");
    } else {
      const lastInput = stack.pop();
      if (lastInput !== "(") {
        return false;
      }
    }
  }
  return true;
}
