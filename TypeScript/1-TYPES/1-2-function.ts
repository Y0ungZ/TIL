{
    //JavaScript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    //TypeScript ✨
    function add(num1: number, num2: number):number {
        return num1 + num2;
    }

    //JavaScript 💩
    function jsFetchNum(id){
        //code ...
        //code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    //TypeScript ✨
    function FetchNum(id: string): Promise<number>{
        //code ...
        //code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    //JavaScript(최신) ✨ => TypeScript
    //Optional parameter
    //?:전달해도, 전달하지 않아도 OK!
    //lastName:string|undefined라고 해놓으면
    //항상, 언제나 string이 아니라면 undefined라고 정의를 해주어야한다. 
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName); //undefined 가능
    }
    printName('NOH', 'YOUNG JU');
    printName('What');

    //Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message); //없으면 default.
    }

    printMessage();

    //Rest parameter
    function addNumbers(...numbers:number[]): number{
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2,3,4));
    console.log(addNumbers(1, 2,3,4,5,6));


}