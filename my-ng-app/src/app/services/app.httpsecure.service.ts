import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {department, Response, SecureResponse, users} from './../models/department';

@Injectable({
  providedIn: 'root'
})
export class SecureHttpService {

  private url:string;

  // Injecting HttpClient
  constructor(private http:HttpClient ){
    this.url = 'http://localhost:7015';
  }

  registerUser(user:users): Observable<SecureResponse> {
    let response:Observable<SecureResponse>;
    response = this.http.post<SecureResponse>(`${this.url}/api/auth/register`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  }

  authUser(user:users): Observable<SecureResponse> {
    let response:Observable<SecureResponse>;
    response = this.http.post<SecureResponse>(`${this.url}/api/auth/authuser`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  }

  getDepartments(token:string|null):Observable<SecureResponse>{
  // if(token === null) {return new Observable<SecureResponse>();}
     let response:Observable<SecureResponse>;
     response = this.http.get<SecureResponse>(`${this.url}/api/auth/departments`, {
        headers: {
          "AUTHORIZATION": `bearer ${token}`
        }
     });
     return response;
  }



}


