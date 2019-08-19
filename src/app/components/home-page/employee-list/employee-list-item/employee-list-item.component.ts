import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent implements OnInit {
public ListEmployees:Array<object>=[
  {fullname:"James king", position:"President and CEO", img:""},
  {fullname:"Julie Taylor", position:"VP of Marketing", img:""},
  {fullname:"Eugene Lee", position:"CFO", img:""},
  {fullname:"Jhon Williams", position:"VP of Engineering", img:""},
  {fullname:"Ray Moore", position:"VP of Sales", img:""},
  {fullname:"Paul Jones", position:"QA Manager",img:""}
]
  constructor() { }

  ngOnInit() {
  }

}
