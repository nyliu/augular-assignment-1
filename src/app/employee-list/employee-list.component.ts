import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [
    new Employee('F1234', 'David', 10000, 'Developer', 6),
    new Employee('F1235', 'Mike', 8000, 'Developer', 6),
    new Employee('F1236', 'Tom', 9000, 'Developer', 5),
    new Employee('F1237', 'Eric', 10000, 'Developer', 5),
    new Employee('F1238', 'Nate', 7000, 'Developer', 4),
    new Employee('F1239', 'Susan', 8000, 'Developer', 6),
    new Employee('F1240', 'Kate', 5000, 'Developer', 4),
    new Employee('F1241', 'Jack', 6000, 'Developer', 5),
    new Employee('F1242', 'Kim', 6500, 'Developer', 5),
    new Employee('F1243', 'Chase', 7500, 'Developer', 4),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
