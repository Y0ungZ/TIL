let i = 3;

while (i) {
  alert(i--);
}

//1
//1 출력 후에 --로 인해 0(false)이 되어 종료

let i = 0;
while (++i < 5) alert(i);

// 1
// 2
// 3
// 4

let i = 0;
while (i++ < 5) alert(i);

// 1
// 2
// 3
// 4
// 5

for (let i = 0; i < 5; i++) alert(i);

//0,1,2,3,4

for (let i = 0; i < 5; ++i) alert(i);

//0,1,2,3,4
