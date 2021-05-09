{
  /**
   * Intersection Types : &
   */
  type Student = {
    name: string,
    score: number,
  };

  type Worker = {
    employeeId: number,
    work: () => void,
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  // 다양한 타입을 하나로 묶어서 표현할 수 있다.
  // 주의할점은 모든 인자를 다 넘겨야한다는 점이다. 
  internWork({
    name: 'ellie',
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}