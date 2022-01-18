import { Component, OnInit } from '@angular/core';
import {Department,Departments} from './../../models/communicaiondata';
import {CommunicationService} from './../../services/app.communication.service';
@Component({
  selector: 'app-deptsender-component',
  template: `
    <div class="container">
      <h3>Department Sender</h3>
      <table class="table table-bordered table-striped">
        <thead>
           <tr>
              <th>DeptNo</th>
              <th>DeptName</th>
           </tr>
        </thead>
        <tbody>
          <tr *ngFor="let dept of depts" (click)="onRoClick(dept.DeptNo)">
              <td>{{dept.DeptNo}}</td>
              <td>{{dept.DeptName}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class DeptSenderComponent implements OnInit {
  department:Department;
  depts = Departments;
  constructor(private serv:CommunicationService) {
    this.department = new Department(0,'');
  }

  ngOnInit() { }

  onRoClick(dno:number):void {

     this.serv.onDataUpdate(dno);
  }
}
