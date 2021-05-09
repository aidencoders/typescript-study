{
  /**
   * 자동으로 타입이 결정되는 경우가 있다.
   */

   // 선언과 동시에 문자열을 넣었기 때문에 타입스크립트에서 추론을 한다.
   let text = 'hello';
  //  text = 1; // error

  // message 인자는 암묵적으로 any라는 타입을 가지고 있다.
  function print(message) {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y; // 타입 추론으로 number가 자동으로 결정됨
  }

  const result = add(1, 2); // 타입추론으로 result로 number가 결정됨

  /**
   * 하지만 !! 추론은 좋지 않다. 예제는 간단해서 바로 알 수 있지만 ..
   * 웬만해서는 해주는게 좋다.
   * 원시 값은 너무나 간단하기 때문에 생략해도 좋다.
   */
}