{
    //Array
    const fruits:string[] = ['๐', '๐'];
    const scores: Array<number> = [1, 2, 3];
    //๋์ ์ฐจ์ด์ ์ readonly Array<string>์ ์์ง ์ง์๋์ง ์๋๋ค.(210824)
    function printArray(fruits: readonly string[]) {
        //๋ณ๊ฒฝ๋ถ๊ฐ. ์ฝ์ ์๋ง ์๋ค.
        // fruits.push(X);
    }

    //Tuple -> interface, type alias, class
    //์๋ก ๋ค๋ฅธ ํ์์ ๋ฐ์ดํฐ๋ ๋ด์ ์ ์๋ค.
    //์๋ฆฌ๋ tuple์ฌ์ฉ์ ๋ณ๋ก ์ถ์ฒํ์ง ์๋๋ค.
    let student: [string, number];
    student = ['name', 123];
    student[0]; //name
    student[1]; //123
    //๊ฐ๋์ฑ์ด ๋จ์ด์ง. objectํ์์ผ๋ก ํ๋ค๋ฉด ์ข์ํ๋ฐ?
    // student.name;
    // student.age;
    const [name, age] = student;
    //React์ useState๋ Tupleํํ. Tuple์ ๊ต์ฅํ ์ ์ฐํ๊ฒ ์ฌ์ฉํ ๋ฐฉ๋ฒ.
}