{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  /*
  // MY ANSWER
  function printLoginState(state: ResourceLoadState): void {
    if (state.state === "loading") {
      console.log("👀 loading...");
    } else if (state.state === "success") {
      console.log(`😃 ${state.response.body}`);
    } else if (state.state === "fail") {
      console.log(`😱 ${state.reason}`);
    }
  }
  */

  //Ellie
  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log(`😃 ${state.response.body}`);
        break;
      case "fail":
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
