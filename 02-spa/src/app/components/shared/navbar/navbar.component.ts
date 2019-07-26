import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search:string;

  constructor(private router: Router) { 
    this.search = "";
  }

  ngOnInit() { }

  buscarTexto(search:string){
    this.search = search;
    this.router.navigate(['heroes', search.replace(/ /g, "")]);
  }

}