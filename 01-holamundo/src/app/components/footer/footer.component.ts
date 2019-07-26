import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  author:string;
  year:number;

  constructor(){
    this.author = "Francisco José Ferrer Rodríguez"
    this.year = new Date().getFullYear();
  }

}