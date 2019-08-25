import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private loading:boolean;
  private items:any[] = [];
  private token:string;

  constructor(private spotifyService:SpotifyService) {
    this.loading = true;
  }

  ngOnInit() {

    /*this.token = this.spotifyService.getToken().subscribe(data => {
      this.token = data;
    });*/

    this.spotifyService.getNewReleases().subscribe(data => {
      this.items = data;
      this.loading = false;
    });
    
  }

}