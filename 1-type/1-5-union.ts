{
  /**
   * Union Types: OR
   * 함수가 받을 수 있는 타입을 미리 지정할 수 있다. ( 자동완성 가능 )
   * 여러 경우의 수 중에 하나만 받아서 쓰고싶을 때 사용한다.
   * 활용도가 굉장히 높다.
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('up');

  type TileSize = 8 | 16 | 32;
  const title: TileSize = 16;

  /**
   * function : login -> success, fail
   */
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailSate = {
    reason: string;
  };

  type LoginState = SuccessState | FailSate;

  function login(): LoginState {
    return {
      reason: 'failed!',
    };
  }

  // printLoginState(state)
  // success -> 성공한 메세지 body 출력
  // 실패했다면 reason을 출력하는
  // const printLoginState = login;
  // const result: LoginState = printLoginState();
  // console.log(result);
  function printLoginState(state: LoginState) {
    // 코드를 작성하는 시점에는 안에 무엇이 있는지 모른다.
    // 그래서 state. 이렇게 하면 아무것도 나오지 않는다. 그래서 in 이라는 것을 사용하기도 함
    // 하지만 별로 좋은 방법이 아니다. 그래서 Discriminated Union을 사용한다.
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}