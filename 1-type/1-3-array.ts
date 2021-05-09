{
  const scores: number[] = [1,3,4];
  const scores2: Array<number> = [1,3,4];
  function printArray(scores: readonly number[]) {

  }

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // 권장하지 않음
  // 0 안에 어떤 데이터가 들어있는지 확인 할 수 없다.
  // 오브젝트나 클래스 형태로 사용하자.
  // const [name, age] = student;
}