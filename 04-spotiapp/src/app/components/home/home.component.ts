import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private items:any[] = [];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }

}