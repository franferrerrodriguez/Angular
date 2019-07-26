import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor:string;
  anno:number;
  
  constructor() {
    this.autor = "Francisco José Ferrer Rodríguez";
    this.anno = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
