{
  /**
   * 기본적인 타입 정의부터 복잡한 타입까지 정의 할 수 있다.
   * 새로운 타입을 내가 정의할 수 있다.
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   * 문자열을 지정한 문자열만 사용할 수 있다.
   * 이걸 왜 쓰는지는 다음 영상에서 !
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
}