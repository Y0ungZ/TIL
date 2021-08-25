{
    //Array
    const fruits:string[] = ['🍓', '🍉'];
    const scores: Array<number> = [1, 2, 3];
    //둘의 차이점은 readonly Array<string>은 아직 지원되지 않는다.(210824)
    function printArray(fruits: readonly string[]) {
        //변경불가. 읽을 수만 있다.
        // fruits.push(X);
    }

    //Tuple -> interface, type alias, class
    //서로 다른 타입의 데이터도 담을 수 있다.
    //엘리는 tuple사용을 별로 추천하지 않는다.
    let student: [string, number];
    student = ['name', 123];
    student[0]; //name
    student[1]; //123
    //가독성이 떨어짐. object형식으로 한다면 좋을텐데?
    // student.name;
    // student.age;
    const [name, age] = student;
    //React의 useState도 Tuple형태. Tuple을 굉장히 유연하게 사용한 방법.
}