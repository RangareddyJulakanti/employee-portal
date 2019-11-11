import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Employee } from '../model/employee';
import { JWTAUthToken } from '../model/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private empService:EmployeeServiceService,private router:Router) { }

  public employee:Employee;

  ngOnInit() {
    this.employee = new Employee(null,null,null,null,null,null);
  }

  handleLogin(){

    this.empService.getToken(this.employee).subscribe(
      jWTAUthToken => {
        sessionStorage.setItem("auth-token",jWTAUthToken.token);
        console.log(jWTAUthToken.token);
        sessionStorage.setItem("current-user",this.employee.username);
        this.router.navigate(["home"]);

        // this.empService.fetchEmployeeByUserName(this.employee.username)
        // .subscribe(employee=>{
        //   console.log(employee);

        // });
      },
      error => {
        console.log("error"+error);
      }

    );
  }


}
