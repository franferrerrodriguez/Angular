import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private artistas:any[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {

  }

  buscar(termino:string):void{
    this.spotifyService.search(termino).subscribe(data => {
      this.artistas = data;
    });
  }
  
}
