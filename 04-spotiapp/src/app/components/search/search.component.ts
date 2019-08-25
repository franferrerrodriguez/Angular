import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private loading:boolean;
  private items:any[] = [];

  constructor(private spotifyService:SpotifyService) {
    
  }

  ngOnInit() {

  }

  buscar(termino:string):void{
    this.loading = true;
    if(termino){
      this.spotifyService.searchAllArtists(termino).subscribe(data => {
        this.items = data;
      });
    }else{
      this.items = [];
    }
    this.loading = false;
  }
  
}
