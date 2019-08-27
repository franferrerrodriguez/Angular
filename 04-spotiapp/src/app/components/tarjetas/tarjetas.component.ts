import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() item:any;

  constructor(private router: Router) { }

  ngOnInit() { }

  showArtist(item:any){
    let idArtist;

    if(item.artists != null && item.artists.length > 0){
      idArtist = item.artists[0].id;
    }else{
      idArtist = item.id;
    }

    this.router.navigate(['artist', idArtist]);
  }

}