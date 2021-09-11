### [Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

- `reduce()` 메서드는 배열의 각 요소에 대해 주어진 `리듀서(reducer)`함수를 실행하고, 하나의 결과 값을 반환한다.

```
const array1 = [1,2,3,4];
const reducer = (previous, current)=> previous+current; //콜백함수

//prev : 1 , current: 2
//prev : 3 , current: 3
//prev : 6 , current: 4
//반환값 : 10

console.log(array1.reduce(reducer)); //1+2+3+4=10

console.log(array1.reduce(reducer,5));
//5+1+2+3+4=15

```

**리듀서의 인자값**

1. 누산기(acc)
2. 현재 값(cur)
3. 현재 인덱스(idx)
4. 원본 배열(src)

리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 된다.

`arr.reduce(callback[,initialValue])`

- `callback` : 배열의 각 요소에 대해 실행할 함수. 네 가지 인수를 받음.
  - `accumnlator` : 누산기. 콜백의 반환값을 누적함. 이전 반환값 또는 첫 번째 호출이면서 `initialValue`를 제공한 경우에는 `initialValue`값.
  - `currentValue` : 처리할 현재 요소.
  - `currentIndex` : `Optional`. 처리할 현재 요소의 인덱스. `initialValue`를 제공한 경우 0, 아니면 1.
  - `array` : `Optional`. `reduce()`를 호출한 배열.
- `initialValue` : `Optional`. `callback`의 최초 호출에서 첫 번째 인수에 제공하는 값. 없을 시 배열의 첫번째 요소를 사용. 빈 배열에서 초기값 없이 `reduce()` 호출 시 에러 발생. 배열의 요소가 하나인데 `initialValue`를 제공하지 않았거나, 주어졌으나 배열이 빈 경우에는 단독 값을 `callback`호출 없이 반환.

**reduce()의 반환 값** : 누적 계산의 결과 값.

---

**📃설명**

- `reduce()`는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 `callback`함수를 한 번씩 실행한다. 그리고 콜백함수는 위에 언급했듯이 네 인수를 받는다. 최초 호출 시 `accumulator`, `currentValue`는 다음 두 가지 값 중 하나를 가질 수 있다.

  > `initialValue`를 제공한 경우, `accumulator` === `initialValue`, `currentValue`는 배열의 첫번째 값.

  > `initialValue`를 제공하지 않았다면, `accumulator`===`배열의 첫 번째 값`, `currentValue`는 두 번째 값.

❗ `initialValue`를 제공하지 않으면, `reduce()`는 인덱스 1부터 시작. 제공한다면 0부터 시작한다.

- `initialValue`를 제공하지 않으면 출력 가능한 형식이 세 가지이므로, 보통 초기값을 주는게 안전하다.

```
var maxCallback = (acc, cur)=> Math.max(acc.x, cur.x);

var maxCallback2 = (max, cur)=> Math.max(max,cur);

//initialValue 없이 reduce()
[{x:22},{x:42}].reduce(maxCallback); //42

[{x:22}].reduce(maxCallback); //{x:22}, 콜백 호출안함.

[].reduce(maxCallback); //TypeError

//map/reduce로 개선 - 비었거나 더 큰 배열에서도 동작
[{x:22},{x:42}].map(el=>el.x).reduce(maxCallback2,-Infinity);

```

---

**작동 방식**

```
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
```

- 콜백은 4번 호출된다.

| callback   | accumulator | currentValue | currentIndex | array       | 반환값 |
| ---------- | ----------- | ------------ | ------------ | ----------- | ------ |
| 1번째 호출 | 0           | 1            | 1            | [0,1,2,3,4] | 1      |
| 2번째 호출 | 1           | 2            | 2            | [0,1,2,3,4] | 3      |
| 3번째 호출 | 3           | 3            | 3            | [0,1,2,3,4] | 6      |
| 4번째 호출 | 6           | 4            | 4            | [0,1,2,3,4] | 10     |

▶ `reduce()`가 반환하는 값은 마지막 콜백 함수의 반환값인 10이다.

- `arrow function`도 사용 가능.

```
[0,1,2,3,4].reduce((prev,curr)=>prev+curr);
```

**cf. `initialValue`제공 시**

```
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}, 10);
```

| callback   | accumulator | currentValue | currentIndex | array       | 반환값 |
| ---------- | ----------- | ------------ | ------------ | ----------- | ------ |
| 1번째 호출 | 10          | 0            | 0            | [0,1,2,3,4] | 10     |
| 2번째 호출 | 10          | 1            | 1            | [0,1,2,3,4] | 11     |
| 3번째 호출 | 11          | 2            | 2            | [0,1,2,3,4] | 13     |
| 4번째 호출 | 13          | 3            | 3            | [0,1,2,3,4] | 16     |
| 5번째 호출 | 16          | 4            | 4            | [0,1,2,3,4] | 20     |

---

**예제**

- 배열의 모든 값 합산

```
var sum=[0,1,2,3].reduce(function(accumulator, currentValue){
    return accumulator+currentValue;
},0);
//6
```

```
var sum = [0,1,2,3].reduce((acc,cur)=>acc+cur,0);

```

- 객체 배열에서의 값 합산 : `반드시` 초기값을 주어 각 항목이 만들어진 함수를 거치도록 해야함.

```
var initialValue=0;
var sum = [{x:1},{x:2},{x:3}].reduce(function (acc,cur){
    return acc+cur.x;
},initialValue);

console.log(sum); //6
//initialValue가 없다면 acc에 {x:1}, 즉 object가 들어가게됨.
//이러한 것을 방지하려고 주는 거 아닐까?
```

```
var initialValue=0;
var sum = [{x:1},{x:2},{x:3}].reduce((acc,cur)=>acc+cur.x,initialValue);

console.log(sum); //6
```

- 중첩 배열 펼치기

```
var flattened = [[0,1],[2,3],[4,5]].reduce(function(acc,cur){
    return acc.concat(cur);
},[]);

//펼친 결과 : [0,1,2,3,4,5]

```

```
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
);

//currentValue [0,1],[2,3],[4,5]
//빈배열 [](initialValue)을 주지 않으면 currentValue는 [2,3],[4,5]

```

- 객체 내의 값 인스턴스 개수 세기

```
var names=['Young','Ju','Cat','Lover','Young'];

var countedNames = names.reduce(function(allNames,name){
    if(name in allNames){
        allNames[name]++;
    }else{
        allNames[name]=1;
    }
},{});

//{'Young':2,'Ju':1,'Cat':1,'Lover':1}
```

- 속성으로 객체 분류하기

```
var people=[
    {
        name:'Young Ju',
        age: 20
        //영원한 스무살 영주
    },
    {
        name:'Nyan dol',
        age:21

    },
    {
        name:'BBung BBung',
        age:20
    }
];

function groupBy(objectArray, property){
    return objectArray.reduce(function(acc,obj){
        var key=obj[property];
        if(!acc[key]){
            acc[key]=[];
        }
        acc[key].push(obj);
        return acc;
    },{});
}

var groupedPeople = groupBy(people,'age');

// {
//   20: [
//     { name: 'Young Ju', age: 20 },
//     { name: 'BBung BBung', age: 20 }
//   ],
//   21: [{ name: 'Nyan dol', age: 21 }]
// }


```

- 배열의 중복 항목 제거
  > `Set`과 `Array.from()`을 사용할 수 있는 환경이라면, `let orderedArray = Array.from(new Set(myArray));를 사용해 중복 요소를 제거할 수도 있다.

```
let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((acc,cur)=>{
    //arr = [1,1,2,2,3,3,4,4,5,5]
    const length = acc.length;
    if(length===0 ||acc[length-1] !==cur){
        acc.push(curr);
    }
    return acc;
},[]);
console.log(result);
//[1,2,3,4,5]
```

- 프로미스를 순차적으로 실행하기

```
function runPromiseInSequence(arr,input){
    return arr.reduce(
        (promiseChain, currentFunction)=> promiseChain.then(currentFunction),Promise.resolve(input)
    );
}

function p1(a){
    return new Promise((resolve,reject)=>{
        resolve(a*5);
    });
}

function p2(a){
    return new Promise((resolve,reject)=>{
        resolve(a*2);
    });
}

function f3(a){
    return a*3;
}

function p4(a){
    return new Promise((resolve,reject)=>{
        resolve(a*4);
    });
}

const promiseArr = [p1,p2,f3,p4];
runPromiseInSequence(promiseArr,10).then(console.log); //1200


```
