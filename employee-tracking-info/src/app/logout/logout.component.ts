import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private empService : EmployeeServiceService) { }

  ngOnInit() {

    this.empService.logOut();

  }

}
