const isCorrect = (u) => {
  let openBracket = 0;
  let closeBracket = 0;

  for (let i = 0; i < u.length; i++) {
    if (u[i] === '(') {
      openBracket++;
    } else {
      closeBracket++;
      if (closeBracket > openBracket) {
        return false;
      }
    }
  }
  return true;
};

const isBalance = (u) => {
  let openBracket = 0;
  let closeBracket = 0;
  let sliceIdx = 0;

  for (let i = 0; i < u.length; i++) {
    if (u[i] === '(') {
      openBracket++;
    } else {
      closeBracket++;
    }

    if (openBracket === closeBracket) {
      sliceIdx = i;
      break;
    }
  }

  return sliceIdx;
};

const changeBracket = (w) => {
  if (!w.length) {
    return '';
  } else {
    let sliceIdx = isBalance(w);
    let u = w.slice(0, sliceIdx + 1);
    let v = w.slice(sliceIdx + 1, w.length);

    if (isCorrect(u)) {
      return u + changeBracket(v);
    } else {
      let temp = changeBracket(v);
      let uSlice = '';

      for (let i = 1; i < u.length - 1; i++) {
        if (u[i] === '(') {
          uSlice += ')';
        } else {
          uSlice += '(';
        }
      }

      return '(' + temp + ')' + uSlice;
    }
  }
};

const solution = (p) => {
  let answer = '';

  if (isCorrect(p)) {
    answer = p;
  } else {
    answer = changeBracket(p);
  }
  return answer;
};
