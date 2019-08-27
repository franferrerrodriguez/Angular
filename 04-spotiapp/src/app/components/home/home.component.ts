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

  constructor(private spotifyService:SpotifyService) {
    this.loading = true;
  }

  ngOnInit() {
    this.homeInit();
  }

  async homeInit(){
    const e = await this.spotifyService.getNewReleases();
    e.subscribe(data => {
      //console.log(data);
      this.items = data;
      this.loading = false;
    });
  };

}