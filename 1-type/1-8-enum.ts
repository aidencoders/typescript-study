{
  /**
   * Enum : 여러가지 관련된 상수를 한곳에 모아서 정의하도록 도와준다.
   * 타입스크립트에서 자체적으로 제공한다.
   */
  
   // JavaScript
   // 타입이 변하지 않아서 좀 더 안전하게 사용이 가능하다.
   const MAX_NUM = 6;
   const MAX_STUDENTS_PER_CLASS = 10;
   const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1});
   const dayOfToday = DAYS_ENUM.MONDAY;

   // TypeScript
   enum Days {
     Monday,
     Tuesday,
   }
   console.log(Days.Monday); // 0
   // 값을 정하지 않으면 자동으로 위에서부터 0부터 증가된다.
   // 값을 정할수도 있다.
   // 타입스크립트에서 enum은 가능한 사용하지 않는게 좋다.
   // enum으로 할당한 변수에 다른 숫자를 넣어도 아무런 문제가 없다. -> 타입 보장이 안된다. 
   // enum 외에 다른 상수를 묶을 수 있는 방법이 있다.

   // 좋은 방법
   // enum을 사용하지않고 union 타입을 사용할 수 있다.
   // enum을 사용하는 경우는 모바일 클라이언트로 보내야 할 때만 사용한다. 
   type goodDays = 'Monday' | 'Thuesday';
   let goodDays: goodDays = 'Monday';
   // goodDays = 1; // error
}