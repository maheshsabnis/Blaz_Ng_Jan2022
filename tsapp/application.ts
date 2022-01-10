class Employee {
    constructor(
        public EmpNo:number,
        public EmpName: string,
        public DeptName: string,
        public Salary: number 
    ){}
}

class EmployeeLogic {
    private Employees: Array<Employee>;
    constructor(){
        this.Employees = new Array<Employee>();
        this.Employees.push(new Employee(101, 'Mahesh1' ,'IT', 1100));
        this.Employees.push(new Employee(102, 'Mahesh2' ,'HR', 1200));
        this.Employees.push(new Employee(103, 'Mahesh3' ,'IT', 1300));
        this.Employees.push(new Employee(104, 'Mahesh4' ,'HR', 1400));
    }

    // dname:string|undefined
    getEmployees(dname?:string): Array<Employee> {
       if(dname === undefined) return this.Employees;

       return this.Employees.filter((e,i)=>{
           return e.DeptName === dname;
       })
    }

    addEmployee(emp:Employee):Array<Employee> {
        this.Employees.push(emp);
        return this.Employees;
    }
}

let objEmp:EmployeeLogic = new EmployeeLogic();

console.log(`All Employees ${JSON.stringify(objEmp.getEmployees(undefined))}`);
console.log(`All Employees of Specific DeptName ${JSON.stringify(objEmp.getEmployees('IT'))}`);
console.log(`All Employees with newly added ${JSON.stringify(objEmp.addEmployee(new Employee(105, 'Mahesh5', 'IT', 13233)))} `);

