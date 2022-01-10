var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName, DeptName, Salary) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
        this.DeptName = DeptName;
        this.Salary = Salary;
    }
    return Employee;
}());
var EmployeeLogic = /** @class */ (function () {
    function EmployeeLogic() {
        this.Employees = new Array();
        this.Employees.push(new Employee(101, 'Mahesh1', 'IT', 1100));
        this.Employees.push(new Employee(102, 'Mahesh2', 'HR', 1200));
        this.Employees.push(new Employee(103, 'Mahesh3', 'IT', 1300));
        this.Employees.push(new Employee(104, 'Mahesh4', 'HR', 1400));
    }
    // dname:string|undefined
    EmployeeLogic.prototype.getEmployees = function (dname) {
        if (dname === undefined)
            return this.Employees;
        return this.Employees.filter(function (e, i) {
            return e.DeptName === dname;
        });
    };
    EmployeeLogic.prototype.addEmployee = function (emp) {
        this.Employees.push(emp);
        return this.Employees;
    };
    return EmployeeLogic;
}());
var objEmp = new EmployeeLogic();
console.log("All Employees ".concat(JSON.stringify(objEmp.getEmployees(undefined))));
console.log("All Employees of Specific DeptName ".concat(JSON.stringify(objEmp.getEmployees('IT'))));
console.log("All Employees with newly added ".concat(JSON.stringify(objEmp.addEmployee(new Employee(105, 'Mahesh5', 'IT', 13233))), " "));
