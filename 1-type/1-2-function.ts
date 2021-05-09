{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // function Add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // function FetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript => TypeScript
  // Obtional prameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Ellie');

  // Default parameter

  function printMessage(message: string = 'default message') {
    console.log(message);
  }
}