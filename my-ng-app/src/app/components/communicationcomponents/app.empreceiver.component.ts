import { Component, OnInit } from '@angular/core';
import {Employee, Employees} from './../../models/communicaiondata';
import {CommunicationService} from './../../services/app.communication.service';
@Component({
  selector: 'app-empreceiver-component',
  template: `
    <div class="container">
      <h3>Employee Receiver</h3>
      <table class="table table-bordered table-striped">
        <thead>
           <tr>
           <th>EmpNo</th>
           <th>EmpName</th>
              <th>DeptNo</th>
           </tr>
        </thead>
        <tbody>
          <tr *ngFor="let emp of filteredEmployees">
          <td>{{emp.EmpNo}}</td>
          <td>{{emp.EmpName}}</td>
              <td>{{emp.DeptNo}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class EmpReceiverComponent implements OnInit {
  employee:Employee;
  emps = Employees;
  filteredEmployees: Array<Employee>;
  constructor(private serv:CommunicationService) {
    this.employee = new Employee(0,'',0);
    this.filteredEmployees  =new Array<Employee>();
  }
  // Subscribe to the event
  ngOnInit() {

     this.serv.notify.subscribe((id)=>{
       this.employee.DeptNo = id;
        this.filteredEmployees = this.emps.filter((e,i)=>{
          return e.DeptNo === this.employee.DeptNo;
        });
     })
  }

  // lets create a public readonly property that will filter through the Employees
  // get FilteredEmployees():Array<Employee> {
  //   this.filteredEmployees  =new Array<Employee>();
  //   if(this.employee.EmpNo === 0) {
  //     this.filteredEmployees = this.emps;
  //   }else {
  //     this.filteredEmployees = this.emps.filter((e,i)=>{
  //       return e.DeptNo === this.employee.DeptNo;
  //     });
  //   }
  //   return this.filteredEmployees;
  // }

}
