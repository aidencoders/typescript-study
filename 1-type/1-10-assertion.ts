/**
 * 타입을 강요할 때 사용한다.
 * 썩 좋은건 아니다.
 * JavaScript와 함께 쓰기 때문에 불가피하게 써야할 경우가 있다.
 */
{
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // any 타입이라서 string에서 사용하는 api를 사용할 수 없다.
  // 이 때 Assertion을 사용한다.
  console.log((result as string).length);
  // 100% 타입을 장담할때만 사용한다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); // 경고.. 무조건 배열이라고 확신해.
  numbers!.push(2); // 확신한다..!!
}