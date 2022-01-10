class SimpleClass {
  private x: number;
  private y: number;
  private z: number;
  private name:string;
  constructor(a: number, b: number) {
    this.x = a;
    this.y = b;
  }

  power(): number {
    if (this.validate()) {
      this.z = Math.pow(this.x, this.y);
    } else {
        this.z = 0;
    }
    return this.z;
  }


  set Name(v:string){
      this.name = v;
  } 
  get Name():string {
      return this.name.toUpperCase();
  }


  private validate(): boolean {
    if (this.x < 0 || this.y < 0) {
      return false;
    }
    return true;
  }
}

let obj:SimpleClass  = new SimpleClass(10,5);
console.log(`result = ${obj.power()}`);
let obj1:SimpleClass = new SimpleClass(-10,9);
console.log(`result = ${obj1.power()}`);
obj1.Name = 'Mahesh';
console.log(`Name = ${obj1.Name}`);

