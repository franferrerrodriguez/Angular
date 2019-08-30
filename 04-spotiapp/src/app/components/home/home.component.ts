import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private loading:boolean;
  private items:any[] = [];
  private httpErrorResponse:HttpErrorResponse;

  constructor(private spotifyService:SpotifyService) {
    this.loading = true;
  }

  ngOnInit() {
    this.getNewReleases();
  }

  async getNewReleases(){
    
    try {
      let e = await this.spotifyService.getNewReleases();

      e.subscribe(data => {
        // console.log(data);
        this.items = data;
        this.httpErrorResponse = null;
        this.loading = false;
      }, (e:HttpErrorResponse) => { // Capturamos error de petición OK no autorizada (401)
        console.log(e);
        this.httpErrorResponse = e;
        this.loading = false;
        throw e;
      });
    } catch (e) { // Capturamos error de petición KO
      console.log(e);
      this.httpErrorResponse = e;
      this.loading = false;
      throw e;
    }
    
  };

}