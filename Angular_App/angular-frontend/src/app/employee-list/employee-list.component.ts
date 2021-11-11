import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees =[{
          "id": 1,
          "firstName": "Shafiqul",
          "lastName": "Islam",
          "emailId": "shafiqul@gmail.com"
      },
      {
          "id": 2,
          "firstName": "Nadia",
          "lastName": "Akter",
          "emailId": "nadia@gmail.com"
      }];
  }

}
