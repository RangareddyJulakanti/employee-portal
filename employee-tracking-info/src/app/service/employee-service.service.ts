import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { JWTAUthToken } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) {

  }
  public getToken(employee:Employee):Observable<JWTAUthToken>{
   return this.http.post<JWTAUthToken>(this.baseUrl+"/token/generate-token",employee);
  }
  public fetchEmployeeByUserName(userName:string):Observable<Employee>{
    let token=sessionStorage.getItem("auth-token");
    let baseHeader="Bearer "+token;
    let headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : baseHeader
    });
    return this.http.get<Employee>(this.baseUrl+"/user/userName/"+userName,{headers:headers});
  }
  public fetchEmployeeById(id:string):Observable<Employee>{
    let token=sessionStorage.getItem("auth-token");
    let baseHeader="Bearer "+token;
    let headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : baseHeader
    });
    return this.http.get<Employee>(this.baseUrl+"/users/"+id,{headers:headers});
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('auth-token');
    return !(user == null);
  }
  logOut(){
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("current-user");
    return true;
  }

}
