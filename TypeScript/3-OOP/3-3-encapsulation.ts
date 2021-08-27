{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public : default, 공개적
  //private : 외부에서 절대 볼 수 없다.
  //protected : 외부접근은 안되지만 자식클래스는 가능.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //변하지 않는 값 -> static(class level)
    private coffeeBeans: number = 0; //instance(object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } //권장

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      //여기서 채운다.
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(3);
  console.log(maker);
  // maker.fillCoffeeBeans(-22); //Error

  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User("NOH", "YOUNG JU");
  console.log(user.fullName);
  user.firstName = "NOHH";
  console.log(user.fullName); //여전히 NOH YOUNG JU => getter,setter 필요

  class User2 {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 25;
    get age(): number {
      //읽기전용 getter
      return this.internalAge;
    }
    set age(num: number) {
      //쓰기전용 setter
      if (num < 0) {
        throw new Error("What?!");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user2 = new User2("KANG", "NANGKONG");
  console.log(user2.fullName);
  user2.age = 55;
  console.log(user2);
}
