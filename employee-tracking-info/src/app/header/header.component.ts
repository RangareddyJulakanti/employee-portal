import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  empService: EmployeeServiceService;

  constructor(empService:EmployeeServiceService) {
    this.empService=empService;
  }

  ngOnInit() {
  }

}
