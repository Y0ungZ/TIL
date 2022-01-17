console.log((1.35).toFixed(1)); //1.4
console.log((6.35).toFixed(1)); //6.3
// 왜 6.3? -> 정밀도 손실.
// 6.4로 만드는 방법 -> 최대한 정수와 가깝게.
// 2진법 체계로 만들면 안전한 편. 0.5
console.log(Math.round(6.35 * 10) / 10);
