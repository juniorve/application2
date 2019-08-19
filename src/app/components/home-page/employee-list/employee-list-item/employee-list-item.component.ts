import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent implements OnInit {
public ListEmployees:Array<object>=[
  {id:1 ,fullname:"James king", position:"President and CEO", img:"assets/images/imagen8.jpg"},
  {id:2 ,fullname:"Julie Taylor", position:"VP of Marketing", img:"assets/images/imagen3.jpg"},
  {id:3 ,fullname:"Eugene Lee", position:"CFO", img:"assets/images/imagen2.jpg"},
  {id:4 ,fullname:"Jhon Williams", position:"VP of Engineering", img:"assets/images/imagen4.jpg"},
  {id:5 ,fullname:"Rita Moore", position:"VP of Sales", img:"assets/images/imagen5.jpg"},
  {id:6 ,fullname:"Paula Jones", position:"QA Manager",img:"assets/images/imagen7.jpg"},
  {id:7 ,fullname:"Louis Trevor", position:"Tester",img:"assets/images/imagen1.jpg"}
]
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  infoEmployee(idEmployee){
    this.router.navigate(["../employee/employee-page/"+idEmployee],{relativeTo:this.route});
  }

}
