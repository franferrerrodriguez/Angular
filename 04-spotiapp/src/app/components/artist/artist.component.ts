import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  private id:number;
  private artist:any;

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { 

    this.route.params.subscribe(params => {
      this.id = params.id;
    })

  }

  ngOnInit() {
    console.log(this.id);

    this.artist = this.spotifyService.searchArtistById(this.id).subscribe(data => {
      console.log(data);
      this.artist = data;
    });
  }

}