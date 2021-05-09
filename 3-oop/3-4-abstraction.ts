{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  //인터페이스는 나랑 의사소통 하려면 나는 이런 규약, 이런 행동을 가지고 있다고 말하는 계약서와 같다.

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number);
    clean();
  }

  // public
  // private
  // protected
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // 클래스에서 한번 정의 되어 지고 오브젝트 사이에서 공유 될 수 있는 아이들은 멤버 변수로 쓰면 메모리 낭비가 있을 수 있다.
    private static BEANS_GRAM_PER_SHOT = 7; // class Level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!!");
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean() {
      console.log("cleaning the machine...");
    }
  }

  const maker:CoffeeMachine = new CoffeeMachine(32);
  // 추상화는 인터페이스를 간단하고 심플하게 만들어서 심플하게 사용 할 수 있도록 도와준다.
  // 여러가지 방식이 있지만.. 언어마다 할 수 있는 레벨이 다르지만, -> 접근제어자를 통해서도 할 수 있다.
  // 인터페이스를 통해서도 추상화를 할 수 있다.
  // 클래스를 사용하는 사람이 편하게 쓸 수 있다. -> 필요한 함수만 노출한다.
  maker.makeCoffee(2);

  const maker2: CommercialCoffeeMaker = new CoffeeMachine(32);

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }
}
