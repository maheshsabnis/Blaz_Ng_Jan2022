import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {department, Response} from './../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentHttpService {

  private url:string;

  // Injecting HttpClient
  constructor(private http:HttpClient ){
    this.url = 'http://localhost:7013';
  }

  getDepartments():Observable<Response>{
     let response:Observable<Response>;
     response = this.http.get<Response>(`${this.url}/api/departments`);
     return response;
  }

  getDepartmentbyid(id:number):Observable<Response>{
    let response:Observable<Response>;
    response = this.http.get<Response>(`${this.url}/api/departments/${id}`);
    return response;
  }

  postDepartment(dept:department):Observable<Response>{
    let response:Observable<Response>;
    response = this.http.post<Response>(`${this.url}/api/departments`, dept, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  }

  putDepartment(id:number,dept:department):Observable<Response>{
    let response:Observable<Response>;
    response = this.http.put<Response>(`${this.url}/api/departments/${id}`, dept, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  }

  deleteDepartment(id:number):Observable<Response>{
    let response:Observable<Response>;
    response = this.http.delete<Response>(`${this.url}\${id}`);
    return response;
  }

}


