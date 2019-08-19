import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() public header:string;
@Input() public bandera=false;
@Input() public ruta;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  return(){
    console.log(this.ruta);
    this.router.navigate([this.ruta],{relativeTo:this.route});
  }

}
