import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public employees:any=[
    {id:1, fullname:"James king", position:"President and CEO", img:"assets/images/imagen8.jpg",numOffice:"781-000-0001",numMobile:"617-000-0001",sms:"617-000-0001",email:"jking@fakemail.com"},
    {id:2, fullname:"Julie Taylor", position:"VP of Marketing", img:"assets/images/imagen3.jpg",numOffice:"781-000-0002",numMobile:"617-000-0002",sms:"617-000-0002",email:"jtaylor@fakemail.com"},
    {id:3, fullname:"Eugene Lee", position:"CFO", img:"assets/images/imagen2.jpg",numOffice:"781-000-0003",numMobile:"617-000-0003",sms:"617-000-0003",email:"elee@fakemail.com"},
    {id:4, fullname:"Jhon Williams", position:"VP of Engineering", img:"assets/images/imagen4.jpg",numOffice:"781-000-0004",numMobile:"617-000-0004",sms:"617-000-0004",email:"jwilliams@fakemail.com"},
    {id:5, fullname:"Rita Moore", position:"VP of Sales", img:"assets/images/imagen5.jpg",numOffice:"781-000-0005",numMobile:"617-000-0005",sms:"617-000-0005",email:"rmoore@fakemail.com"},
    {id:6, fullname:"Paula Jones", position:"QA Manager",img:"assets/images/imagen7.jpg",numOffice:"781-000-0006",numMobile:"617-000-0006",sms:"617-000-0006",email:"pjones@fakemail.com"},
    {id:7, fullname:"Louis Trevor", position:"Tester",img:"assets/images/imagen1.jpg",numOffice:"781-000-0007",numMobile:"617-000-0007",sms:"617-000-0007",email:"ltrevor@fakemail.com"}
  ]

  public employee:any={};
  public idEmployee;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.route.params.forEach((params: Params) => {
      let id = parseFloat(params['id']);
      if(id){
        this.idEmployee = id;
      }
    });

    this.employee = this.employees.find(data=>{
      return data.id == this.idEmployee;
    })
  }

}
