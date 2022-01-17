let i = 0;
while (i != 10) {
  i += 0.2;
}

// This loop is infinite. It never ends. Why?
// -> 정밀도 손실 때문.
// 10.199999999999996 이런느낌으로 계속됨.
