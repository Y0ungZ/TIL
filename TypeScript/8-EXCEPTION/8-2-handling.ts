class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new Error("no network");
  }
}

class UserSevice {
  constructor(private client: NetworkClient) {}
  login() {
    //에러가 발생했을 때 내가 고급스럽게 처리할 수 있는 것이 아니라면
    //catch하지 않는 것이 낫다.
    // try {
    //   this.client.tryConnect();
    // } catch (error) {
    //   console.log("catched!!!");
    // }
    //login...
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

//try catch handling을 할 때는,
//내가 여기서 처리하는 것이 과연 의미있는 처리를 할 수 있을까 라고
//생각을 해보아야 한다.
//가장 우아하게 처리할 수 있는 곳에서
//catch하는 것이 중요!

const client = new NetworkClient();
const service = new UserSevice(client);
const app = new App(service);
app.run();
