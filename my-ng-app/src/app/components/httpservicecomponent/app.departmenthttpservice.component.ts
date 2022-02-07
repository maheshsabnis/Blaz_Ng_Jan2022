import { Component, OnInit } from '@angular/core';
import {DepartmentHttpService} from './../../services/app.http.service';
import {department,Response, users, SecureResponse} from './../../models/department';
import {SecureHttpService} from './../../services/app.httpsecure.service';
@Component({
  selector: 'app-departmenthttpservice-component',
  templateUrl: './app.departmenthttpservice.view.html'
})

export class DepartmentHttpServiceComponent implements OnInit {

  receivedResponse:string;
  // Inject the service
  constructor(private serv: DepartmentHttpService, private secure:SecureHttpService) {
    this.receivedResponse = "";
   }

  ngOnInit() { }

  // Make call to the service
  // getAll():void {
  //   this.serv.getDepartments().subscribe((response)=>{
  //      this.receivedResponse = JSON.stringify(response.data);
  //   }, (error)=>{
  //     this.receivedResponse = `Error Occurred ${error}`;
  //   });
  // }

  getAll():void {
    this.serv.getDepartments().subscribe({
      next: (response:Response)=> {
        this.receivedResponse = JSON.stringify(response.data);
      },
      error:(error:any)=>{
        this.receivedResponse = `Error Occurred ${error}`;
      }
    });
  }

  postNew():void {
    let dept:department = new department(10002, 'Dept_10002', 'Pune', 20000);
    this.serv.postDepartment(dept).subscribe((response)=>{
      this.receivedResponse = JSON.stringify(response.data);
   }, (error)=>{
     this.receivedResponse = `Error Occurred ${error}`;
   });
  }

  createNewUser():void {
    let user: users=new users(90001, 'user-90001', 'P@ssw0rd_');
    this.secure.registerUser(user).subscribe({
      next: (response: SecureResponse)=>{
        this.receivedResponse = response.message
      },
      error:(error:any)=>{
        this.receivedResponse = error;
      }
    });
  }

  loginUser():void {
    let user: users=new users(90001, 'user-90001', 'P@ssw0rd_');
    this.secure.authUser(user).subscribe({
      next: (response: SecureResponse)=>{
        this.receivedResponse = response.message
        // save the token in the sessionStorage
        sessionStorage.setItem('Token', response.token);
      },
      error:(error:any)=>{
        this.receivedResponse = error;
      }
    });
  }

  getAuthData():void {
    this.receivedResponse = '';
    // read token from the sessionStorage
    let Token = sessionStorage.getItem('Token');
    alert(`Toktn = ${Token}`)
    this.secure.getDepartments(Token).subscribe({
      next: (response:SecureResponse)=>{
        this.receivedResponse = JSON.stringify(response.records);
      },
      error:(error:any)=>{
        this.receivedResponse = `Error Occurred....${error}`;
      }
    });
  }
}
