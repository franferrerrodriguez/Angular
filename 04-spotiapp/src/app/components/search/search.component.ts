import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private loading:boolean;
  private items:any[];

  constructor(private spotifyService:SpotifyService) {
    this.loading = true;
  }

  ngOnInit() {

  }

  buscar(termino:string):void{
    this.spotifyService.search(termino).subscribe(data => {
      this.items = data;
      this.loading = false;
    });
  }
  
}
