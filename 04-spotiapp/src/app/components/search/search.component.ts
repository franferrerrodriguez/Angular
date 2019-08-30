import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private loading:boolean;
  private items:any[] = [];
  private httpErrorResponse:HttpErrorResponse;
  
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() { }

  async search(termino:string){

    try {
      this.loading = true;
      if(termino){
        const e = await this.spotifyService.searchAllArtists(termino);
        e.subscribe(data => {
          this.items = data;
          this.httpErrorResponse = null;
          this.loading = false;
        }, (e:HttpErrorResponse) => { // Capturamos error de petición OK no autorizada (401)
          console.log(e);
          this.httpErrorResponse = e;
          this.loading = false;
          throw e;
        });
      }else{
        this.items = [];
      }
      this.loading = false;
    } catch (e) { // Capturamos error de petición KO
      console.log(e);
      this.httpErrorResponse = e;
      this.loading = false;
      throw e;
    }

  }
  
}