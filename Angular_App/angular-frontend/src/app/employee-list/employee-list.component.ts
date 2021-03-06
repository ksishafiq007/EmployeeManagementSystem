import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.employees=[{
      "id":1,
      "firstName":"mahin",
      "lastName":"Joker",
      "emailId":"dip@gmail.com"
    },
    {
      "id":2,
      "firstName":"mahinur",
      "lastName":"Jaforir",
      "emailId":"dipa@gmail.com"
    }];
    
  }

}
