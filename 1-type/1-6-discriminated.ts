{
    /**
   * function : login -> success, fail
   * 동일한 키와 다른 값을 가지고 있도록 해야한다.
   */
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailSate = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailSate;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in',
      },
    };
  }

  function printLoginState(state: LoginState) {
    // state.result // 성공일수도 실패일수도 있지만 공통적으로 가지고 있기 때문에 접근이 간으함
    // 타입이 공통된 파라미터를 가지고 있음으로 인해서 얻을 수 있는 것들이 있다.
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}