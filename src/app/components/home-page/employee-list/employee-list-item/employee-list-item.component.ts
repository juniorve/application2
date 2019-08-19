import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent implements OnInit {
public ListEmployees:Array<object>=[
  {fullname:"James king", position:"President and CEO", img:"assets/images/imagen8.jpg"},
  {fullname:"Julie Taylor", position:"VP of Marketing", img:"assets/images/imagen2.jpg"},
  {fullname:"Eugene Lee", position:"CFO", img:"assets/images/imagen3.jpg"},
  {fullname:"Jhon Williams", position:"VP of Engineering", img:"assets/images/imagen4.jpg"},
  {fullname:"Ray Moore", position:"VP of Sales", img:"assets/images/imagen5.jpg"},
  {fullname:"Paul Jones", position:"QA Manager",img:"assets/images/imagen7.jpg"},
  {fullname:"Louis Trevor", position:"Tester",img:"assets/images/imagen1.jpg"}
]
  constructor() { }

  ngOnInit() {
  }

}
