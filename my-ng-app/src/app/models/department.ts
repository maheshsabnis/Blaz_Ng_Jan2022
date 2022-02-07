export class department {
  constructor(
    public deptno:number,
    public deptname:string,
    public location:string,
    public capacity:number
  ){}
}


export class Response {
  constructor(
    public message:string,
    public data:any
  ){}
}


export class users {
  constructor(
    public userid:number,
    public username:string,
    public password:string
  ){}
}


export class SecureResponse {
  constructor(
    public message:string,
    public records:any,
    public token:string
  ){}
}
