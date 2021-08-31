{
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type SuccessState = {
    result: "success";
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error("no network");
    }
  }

  class UserSevice {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserSevice) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        //show dialog to user
        //error은 any타입
        if (error instanceof OfflineError) {
          //사용 불가능.
          //catch받는 순간 타입이 사라짐.
        }
      }
    }
  }
  //참고: TypeScript에서 구현된 catch()에는
  //어떠한 타입정보도 전달되지 않아서
  //instanceOf를 사용할 수 없다!!! 😭
  //내가 예상할 수 있는 상태들은(성공,실패)
  //타입으로 정의하는 것이 더 깔끔하고 안정적.
  const client = new NetworkClient();
  const service = new UserSevice(client);
  const app = new App(service);
  app.run();
}
