class MyBase {
    private str:string;

    constructor(s:string){
        this.str =s;
    }

    getLength():number {
        return this.str.length;
    }
}

class MyDerive extends MyBase {
  private value:string;  
  constructor(s:string){
      super(s); // Call Base class ctor and pass data to it
      this.value = s;
  }
  changeCase(c:string){
      if(c === 'U') return this.value.toUpperCase();
      if(c === 'L') return this.value.toLowerCase();
      return this.value;
  }
}

let objX:MyDerive = new MyDerive('Mahesh');
console.log(`Length = ${objX.getLength()}`);
console.log(`Upper Case = ${objX.changeCase('U')}`);
console.log(`Lower Case = ${objX.changeCase('L')}`);

let objY:MyBase = new MyDerive('Neeta');
console.log(`Length = ${objY.getLength()}`);
console.log(`Upper Case = ${objY.changeCase('U')}`);
console.log(`Lower Case = ${objY.changeCase('L')}`);

