import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  private loading:boolean;
  private id:number;
  private artist:any = {};
  private topTracks:any[] = [];
  private uri = "https://open.spotify.com/embed/album/2jis8I5ZUWtDqV1E0S0NgR";

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { 
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit() {
    this.getArtistById();
    this.getTracksByIdArtist();
  }

  async getArtistById(){
    const e = await this.spotifyService.searchArtistById(this.id);
    e.subscribe(artist => {
      // console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  async getTracksByIdArtist(){
    const a = await this.spotifyService.searchTracksByIdArtist(this.id);
    a.subscribe((topTracks:any[]) => {
      console.log(topTracks);
      this.topTracks = topTracks;
      this.loading = false;
    });
  }

  getUri(){
    return "https://open.spotify.com/embed/album/2jis8I5ZUWtDqV1E0S0NgR";
  }

}