{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    // 클래스에서 한번 정의 되어 지고 오브젝트 사이에서 공유 될 수 있는 아이들은 멤버 변수로 쓰면 메모리 낭비가 있을 수 있다.
    static BEANS_GRAM_PER_SHOT = 7; // class Level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
}