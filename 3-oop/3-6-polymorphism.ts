{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  //인터페이스는 나랑 의사소통 하려면 나는 이런 규약, 이런 행동을 가지고 있다고 말하는 계약서와 같다.

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // public
  // private
  // protected
  class CoffeeMachine implements CoffeeMaker {
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

  class CaffeLatteMachine extends CoffeeMachine {
    private steamMilk() {
      console.log("Steaming some milk... ");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  // 다형성을 이용하면 한가지의 클래스, 인터페이스를 통해서 다른 방식으로 구현한 클래스를 만들 수 있다.
  const machines = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach(machine => {
    console.log("------------------------------");
    machine.makeCoffee(1);
  });
  // 내부적으로 구현된 다양한 클래스들이 한가지의 인터페이스나 동일한 부모 클래스를 상속 했을 때 어떤 클래스인지 구분하지 않고 공통된 메소드를 호출 할 수 있다는 장점이 있다. 
}
