{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigint, symbol, null
   * Object : function, array...
   */

   // number
   const num:number = 123;

   // string
   const str:string = 'hello';

   // boolean
   const boal:boolean = false;

   // undefined
   let age: number | undefined;
   age = undefined;
   age = 1;

   // null
  //  let person: null;
  let person2: string | null;

  function find(): number | undefined {
    return undefined;
  }

  // unknown
  let notSure: unknown = 0;
  notSure = 'he';

  // any
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    return;
  }

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }

  let obj: object;
  function acceptSomeObject(obj: object) {

  }

  acceptSomeObject({name: 'ellie'});
}