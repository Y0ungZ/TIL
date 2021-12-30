'use strict';

const BIRTHDAY = '18.04.1982'; // 대문자 상수가 좋다!(하드코딩 상수는 대문자!)

const age = someCode(BIRTHDAY); // 소문자가 좋을것 같다.
// +) 부가설명 : 런타임에 평가되는 age는 코드 실행시마다 바뀔 가능성이 birthday보다 높다.
// 즉, birthday보다 덜 `상수`스럽다. 대문자가 적합하지 않음.
