{// 충돌을 피하기 위해서 블럭{} 작성!
    // JavaScript
    // old: var(don't use! 호이스팅, 예상치 못한 문제 발생의 원인.)
    // let es6(변경가능)
    // const(변경불가)

    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: 그 외 모든 것. function, array, ...
     */

    // number : -, 소수점 상관없이 숫자
    const num: number = 1;

    // string
    const str: string = 'hello';

    //boolean
    const boal: boolean = false;

    //undefined : 값이 있는지 없는지 결정되지 않음.
    let name: undefined; //💩
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    //null : 나 텅텅 비어있어.(결정됨.)
    let person: null; //💩
    let person2: string | null;

    //unknown 💩 웬만하면 쓰지말기.
    let notSure: unknown = 0;
    notSure = 'What?';

    //any 💩
    let anything: any = 0;
    anything = 'hello';
    
    //void
    function print() :void {
        console.log('hello');
        return; //생략됨.
    }
    //cf.
    function print2() :string {
        return 'hello';
    }
    let unusable: void = undefined; //💩

    //never : 절대절대 리턴할 수 없다.
    function throwError(message: string): never{
        //message-> server(log)
        //리턴하는 값이 없어서 never.
        //에러를 던지던지,
        throw new Error(message);
        //무한으로 돌아가던지.
        // while (true) {
            
        // }
    }

    let neverEnding: never; //💩

    //Object 
    //원시타입을 제외한.
    let obj: object = [2,3]; //💩
    function acceptSomeObject(obj: object) {
        
    }
    acceptSomeObject({ name: 'youngju' });
    acceptSomeObject({ animal: 'cat' });

}