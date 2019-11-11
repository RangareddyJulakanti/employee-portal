import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private loggedInEmp:Employee;
  private username:string;
  private route:ActivatedRoute;
  private employeeService: EmployeeServiceService;
  id: string;
  constructor(route:ActivatedRoute,employeeService:EmployeeServiceService) {
    this.route=route;
    this.employeeService=employeeService;
  }

  ngOnInit() {
    this.username=sessionStorage.getItem("current-user");
    this.employeeService.fetchEmployeeByUserName(this.username)
        .subscribe(employee=>{
          this.loggedInEmp=employee;
           console.log(employee);
         });
  }

}
