import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

   d = new Date();
 text : String = this.d.toString();
 ts = this.text.slice(0,3);
 ps = this.text.slice(3,10)

  ngOnInit(): void {};
} 
