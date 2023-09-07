import { Employee } from './../../Models/Employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  employee = new Employee();
  ngOnInit(): void {};
}
